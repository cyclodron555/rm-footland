export function HeritageIntro() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed text-lg">
        
        {/* Opening line — bold, no italic */}
        <p className="font-semibold text-gray-800">
          This project was born quietly.
        </p>

        <p>
          My family and I arrived in Grand Forks not knowing how deeply this town would become part of our lives.
          What we found here was warmth — real warmth — in people, in conversations, in small everyday moments
          that made a place feel like home.
        </p>

        <p>
          Photography, if left unprinted, slowly disappears. Files get lost. Hard drives fail. Memory fades.
          But when an image becomes something you can hold, something you can return to, it turns into history.
        </p>

        <p className="font-medium text-gray-800">
          This album is my way of saying thank you.
        </p>

        <p>
          Thank you to the people of Grand Forks for the kindness, the openness, and the sense of belonging you
          gave us over five meaningful years. These photographs are not meant to be perfect or timeless — only
          honest. They capture corners, buildings, and details that quietly hold the memory of this town.
        </p>

        <p>
          My hope is simple: that this collection helps preserve a little of what makes Grand Forks feel like
          Grand Forks — so it can be remembered, revisited, and passed forward for years to come.
        </p>

        {/* Signature — italic */}
        <p className="pt-4 italic text-gray-800">
          — Cyclodron
        </p>

        {/* Small note — italic, subtle */}
        <div className="pt-6 space-y-2 text-base italic text-gray-600">
          <p>
            <span className="font-medium text-gray-700">A small note:</span> If your home or building isn’t included here,
            I’m sorry. I focused mostly on structures that feel early-1900s (give or take), and I’m sure I missed
            places that matter.
          </p>
          {/* <p>
            If you have a heritage home — or one that truly carries that older character — feel free to message me.
            If you send a photo, or if a friend can capture it for you, I’ll happily consider adding it to the album over time.
          </p> */}
        </div>

      </div>
    </section>
  )
}
