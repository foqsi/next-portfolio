// /app/discord-bot-features/page.tsx

import GlowCard from "@/components/GlowCard";

export default function DiscordBotFeatures() {
  return (
    <main className="bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-400 max-w-5xl mx-auto px-4 pt-12 pb-16 mb-6 rounded-xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gradient bg-gradient-to-r dark:from-blue-500 dark:to-teal-400 from-gray-500 to-gray-400 bg-clip-text text-transparent">The Isle Evrima Discord Bot</h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          A Discord bot that monitored The Isle Evrima game server logs to create an interactive experience for players.
        </p>
      </header>

      {/* YouTube Video */}
      <section className="mb-6 p-6 bg-gray-200 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Demo Video</h2>
        <div className="w-full max-w-4xl mx-auto rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700">
          <iframe
            src="https://www.youtube.com/embed/IlFK1nlhWuI"
            title="The Isle Evrima Discord Bot Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[500px]"
          ></iframe>
        </div>
      </section>

      {/* Core Features */}
      <GlowCard className="mb-6 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Core Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Monitors live logs for real-time updates</li>
          <li>Interactive experience for players</li>
          <li>Commands for admins and moderators</li>
          <li>Pairing system to link Steam and Discord accounts</li>
          <li>Admin RCON control for server management</li>
          <li>Dinosaur storing and re-storing</li>
          <li>Automatically control dinosaur population by locking those with high player count</li>
          <li>Patreon can unlock dinosaurs</li>
        </ul>
      </GlowCard>

      {/* Commands Explanation */}
      <GlowCard className="mb-6 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Commands</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>/restarts</strong> — Shows when the server restarted.</li>
          <li><strong>/store_dino</strong> — Allows the player to store a dinosaur at 100% stamina.</li>
          <li><strong>/restore_dino</strong> — Restores and unlocks a dinosaur if locked.</li>
          <li><strong>/unlock_dino &lt;dino_name&gt;</strong> — Patreon users can unlock a dinosaur.</li>
          <li><strong>/rcon_send_command &lt;command&gt; &lt;?message&gt;</strong> — Admins can send RCON commands directly from Discord.</li>
          <li><strong>/clear_channel_messages &lt;number&gt;</strong> — Clear messages in a Discord channel.</li>
          <li><strong>/pair</strong> — Generates a pairing key (FD-PAIR-xxxxxx) for linking accounts.</li>
          <li><strong>/check_pair</strong> — Checks the current pairing status.</li>
        </ul>
      </GlowCard>

      {/* How It Works */}
      <GlowCard className="mb-6 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">How It Works</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          The bot listens to game server logs in real time to identify events and messages. It bridges the gap between the in-game experience and the Discord community.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Admins have powerful commands for managing the server, while players can pair their accounts for a more interactive experience.
        </p>
      </GlowCard>
    </main>
  );
}
