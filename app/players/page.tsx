/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState, useRef } from "react"
import SlimPlayerCard from "@/components/cards/SlimPlayerCard"
import { getAllPlayers } from "./server"
import Link from "next/link"

export default function Page() {
  const [players, setPlayers] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const loadingRef = useRef<HTMLDivElement>(null)
  const PLAYERS_PER_PAGE = 64

  useEffect(() => {
    loadMorePlayers()
  }, [])

  const loadMorePlayers = async () => {
    if (loading || !hasMore) return

    setLoading(true)
    try {
      const to = page * PLAYERS_PER_PAGE

      const newPlayers = await getAllPlayers(0, to)

      if (
        newPlayers.length === players.length ||
        newPlayers.length < PLAYERS_PER_PAGE
      ) {
        setHasMore(false)
      }

      setPlayers([...newPlayers])
      setPage((prevPage) => prevPage + 1)
    } catch (error) {
      console.error("Error loading players:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMorePlayers()
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the loading element is visible
    )

    const currentRef = loadingRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [hasMore, loading]) // Re-create observer when these dependencies change

  // Empty dependency array for initial load only

  return (
    <main className="py-16 min-h-screen flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center justify-center gap-2 w-full py-8">
        <div className="text-primary font-bold font-sans text-7xl">PLAYERS</div>
        <div className="text-foreground text-3xl font-light font-sans">
          Players in the hockey national league
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit h-fit">
        {players
          .sort((a, b) => b.goals - a.goals)
          .map((player, id) => (
            <Link href={`/teams/${player.team_id}`} key={`Player${player.id}`}>
              <SlimPlayerCard
                nth={id}
                name={player.name}
                goals={player.goals}
                assists={player.assists}
                points={player.points}
                src={`/images/teams/${player.team_id}.png`}
              />
            </Link>
          ))}
      </div>
      <div
        ref={loadingRef}
        className="h-10 w-full flex justify-center items-center">
        {loading ? <div>Loading...</div> : null}
        {!hasMore && <div className="text-center p-4"></div>}
      </div>
    </main>
  )
}
