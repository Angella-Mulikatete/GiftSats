import { GiftSatForm } from "../components/gift-sat-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-4xl font-bold">BitGift</h1>
            <p className="text-zinc-400">Send Bitcoin gifts to anyone with a phone</p>
          </div>
          <GiftSatForm />
        </div>
      </div>
    </main>
  )
}


