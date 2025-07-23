import MrBImg from "@/assets/images/mrb.jpg";
import HAreengLogo from "@/assets/images/hareeng.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 bg-white text-black relative overflow-hidden">
        {/* Background Image */}
        <img
          src={MrBImg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[2px] pointer-events-none z-0"
          style={{ objectPosition: "center" }}
        />
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 relative z-10">
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative space-y-4 col-span-2">
              <p>
                Hello! I'm Bokang Mothomotsoana, a passionate developer and
                entrepreneur dedicated to building impactful digital solutions.{" "}
                <span className="font-bold">
                  As the founder of Hareeng, a ride-hailing and food delivery app,
                </span>{" "}
                I strive to make everyday life easier and more connected for my
                community.
              </p>
              <p>
                My journey blends technology, creativity, and a drive to solve
                real-world problems. I focus on creating user-friendly experiences
                and scalable platforms, always learning and pushing boundaries in
                both frontend and backend development.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p>
                    I believe in the power of innovation and collaboration to
                    transform ideas into solutions that matter. Through Hareeng and
                    other projects, I aim to empower people and inspire the next
                    generation of creators.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium">
                      Bokang Mothomotsoana, Founder of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={HAreengLogo}
                        alt="Hareeng Logo"
                        height="20"
                        width="auto"
                      />
                      <span>Hareeng</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
