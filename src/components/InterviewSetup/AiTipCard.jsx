import React from 'react'

function AiTipCard() {
  return (
    
              <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5">

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20">
                    🧠
                  </div>

                  <div>

                    <h3 className="font-semibold text-lg">
                      AI Tip
                    </h3>

                    <p className="mt-1 text-sm leading-7 text-gray-300">
                      Uploading your resume helps the AI ask
                      personalized questions based on your skills,
                      projects and work experience, making the mock
                      interview feel much more realistic.
                    </p>

                  </div>

                </div>

              </div>
  )
}

export default AiTipCard
