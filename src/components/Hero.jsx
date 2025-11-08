import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/t6fYoL-pmPsm38nx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="backdrop-blur-sm/0">
          <div className="inline-flex items-center gap-4 rounded-2xl bg-white/80 p-2 pr-4 shadow-lg shadow-purple-200">
            <img
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=256&auto=format&fit=crop"
              alt="Profile"
              className="h-16 w-16 rounded-xl object-cover ring-4 ring-white"
            />
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-[#6A0DAD]">Your Name</h1>
              <p className="text-sm text-gray-600">Designer • Developer • Creator</p>
            </div>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            Crafting elegant digital experiences
            <span className="block text-[#9B59B6]">with purpose and precision.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600">
            I build modern, accessible products with a focus on performance and delightful details.
            Here you can explore my work and read thoughts I share.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {['React', 'TypeScript', 'UI/UX', 'FastAPI'].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#6A0DAD]/10 px-4 py-1.5 text-sm font-medium text-[#6A0DAD] shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
