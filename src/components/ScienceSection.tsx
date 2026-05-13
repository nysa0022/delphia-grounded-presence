import FadeIn from "./FadeIn";

const citations = [
  'Birznieks, Ingvars. "C-Tactile Afferents: The Mystery of Human Emotional Touch Has Not Been Solved." Experimental Brain Research, 2025. PubMed Central, pmc.ncbi.nlm.nih.gov/articles/PMC12369287/.',
  'Case, Laura K., et al. "C-Tactile Afferent Stimulating Touch Carries a Positive Affective Value." PLOS ONE, vol. 12, no. 3, 2017, article e0173457. PubMed Central, pmc.ncbi.nlm.nih.gov/articles/PMC5345811/.',
  'Cleveland Clinic. "13 Grounding Techniques To Help Calm Anxiety." Cleveland Clinic Health Essentials, 25 Nov. 2024, health.clevelandclinic.org/grounding-techniques.',
  'Cleveland Clinic. "8 Ways To Calm Your Anxiety in the Moment." Cleveland Clinic Health Essentials, 24 Jan. 2025, health.clevelandclinic.org/how-to-calm-anxiety.',
  'Cleveland Clinic. "Proprioception." Cleveland Clinic Health Library, 25 July 2024, my.clevelandclinic.org/health/articles/proprioception.',
  'Reynolds, Stacey, Shelly J. Lane, and Brian Mullen. "Effects of Deep Pressure Stimulation on Physiological Arousal." American Journal of Occupational Therapy, vol. 69, no. 3, 2015, pp. 6903350010p1–6903350010p5. PubMed, doi:10.5014/ajot.2015.015560.',
  'Schirmer, Annett, et al. "What Are C-Tactile Afferents and How Do They Relate to \'Affective Touch\'?" Neuroscience & Biobehavioral Reviews, vol. 151, 2023, article 105236. ScienceDirect, doi:10.1016/j.neubiorev.2023.105236.',
];

const ScienceSection = () => {
  return (
    <section id="science" className="bg-primary px-6 py-24 md:py-36">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
            The Science
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mb-10 text-center text-4xl font-normal leading-tight text-primary-foreground md:text-6xl">
            Science Behind Delphia
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mb-20 max-w-3xl text-center text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            Delphia is designed to support the body before high-pressure moments, when performance stress starts showing up physically through shaky hands, racing heart, shallow breathing, muscle tension, or the feeling that control is slipping. Its science is built around two body-based mechanisms: sensory-motor feedback and upper-arm sensory grounding.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn delay={0.25}>
            <article className="h-full rounded-sm border border-primary-foreground/15 bg-primary-foreground/5 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-sage">01 — Mechanism</p>
              <h3 className="mt-4 text-2xl font-normal text-primary-foreground md:text-3xl">
                Sensory-Motor Feedback
              </h3>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-primary-foreground/80">
                <p>
                  A sensory-motor loop is the connection between action and sensation. The brain sends a movement command, the body performs the action, and sensory nerves send feedback back to the brain. With Delphia, this happens when the user squeezes, presses, or slowly strokes the micro steel shot bead channels with their dominant hand.
                </p>
                <p>
                  The beads create texture, resistance, and localized pressure, giving the fingers a specific physical target instead of random nervous movement. This action works like a structured anxiety distractor before stress fully escalates. Instead of only noticing early panic signals, the user has a clear physical pattern to return to: hand movement, bead texture, upper-arm pressure, and sensory feedback.
                </p>
                <div className="rounded-sm border border-primary-foreground/15 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-sage">The loop</p>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
                    brain chooses the action → dominant hand moves → beads create pressure and texture → upper arm receives the input → sensory feedback returns to the brain
                  </p>
                </div>
                <p>
                  Because performance stress can make the body feel unpredictable, this loop gives the user one small, repeatable action they can control before stepping into the moment, helping them feel grounded and in control.
                </p>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.35}>
            <article className="h-full rounded-sm border border-primary-foreground/15 bg-primary-foreground/5 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-sage">02 — Mechanism</p>
              <h3 className="mt-4 text-2xl font-normal text-primary-foreground md:text-3xl">
                Upper-Arm Sensory Grounding
              </h3>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-primary-foreground/80">
                <p>
                  The upper arm placement is intentional because the upper arm contains hairy skin, where C-tactile afferents are found. CT afferents are nerve fibers associated with affective touch, meaning the pleasant, soothing, body-aware side of touch. Research describes CT afferents as especially responsive to slow, gentle stroking on hairy skin, with many studies discussing an optimal stroking speed around 3 cm per second.
                </p>
                <p>
                  When the user slowly strokes the bead channels or wrap surface on the upper arm, that motion may support affective-touch pathways linked to calming touch and body awareness. The upper-arm placement and slow stroking motion are designed to work with affective-touch pathways.
                </p>
                <p>
                  The upper arm also supports proprioception, the body's sense of position and movement. When Delphia applies pressure to the upper arm, it gives the brain clearer body-based feedback: <em>this is my arm, this is my body, I am physically here.</em>
                </p>
                <p>
                  Delphia's micro steel shot bead channels create focused deep pressure, which stimulates mechanoreceptors — sensory receptors that respond to touch, pressure, stretch, and movement. Deep pressure stimulation has been studied for its effect on autonomic arousal, including reduced sympathetic arousal and increased parasympathetic arousal in a pressure-vest study.
                </p>
                <p>
                  Together, Delphia uses slow touch, pressure, texture, and body-position feedback to create a steady grounding signal before performance stress peaks.
                </p>
              </div>
            </article>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-20 border-t border-primary-foreground/15 pt-10">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">Works Cited</p>
            <ul className="mt-6 space-y-3">
              {citations.map((c, i) => (
                <li key={i} className="text-xs leading-relaxed text-primary-foreground/60 md:text-sm">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <p className="mt-12 text-xs leading-relaxed text-primary-foreground/50 md:text-sm">
            Disclaimer: Delphia is a wellness product, not a medical device. It is designed to support grounding, physical steadiness, and a greater sense of control before high-pressure moments, not to diagnose, treat, or cure anxiety.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ScienceSection;
