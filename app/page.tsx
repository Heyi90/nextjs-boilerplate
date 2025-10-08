import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Avatar */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <Image
              src="/avatar.jpg"
              alt="仇杰"
              width={200}
              height={200}
              className="relative rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
              priority
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              仇杰
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium">
              AI先行者 | AI副业探索 | AI编程开发者
            </p>
          </div>

          {/* Skills Section */}
          <div className="w-full max-w-4xl mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8">
              专业技能
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "AI绘画", icon: "🎨", color: "from-pink-500 to-rose-500" },
                { name: "AI PPT", icon: "📊", color: "from-blue-500 to-cyan-500" },
                { name: "AI数字人", icon: "👤", color: "from-purple-500 to-indigo-500" },
                { name: "AI编程", icon: "💻", color: "from-green-500 to-emerald-500" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="group relative p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative text-center space-y-3">
                    <div className="text-4xl">{skill.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-full max-w-2xl mt-16 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              联系方式
            </h2>
            <div className="flex items-center justify-center space-x-3 text-lg">
              <span className="text-2xl">💬</span>
              <span className="text-slate-600 dark:text-slate-300">微信：</span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">choucoj</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 dark:text-slate-400">
        <p className="text-sm">© 2024 仇杰. All rights reserved.</p>
      </footer>
    </div>
  );
}
