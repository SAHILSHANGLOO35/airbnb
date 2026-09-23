import { CalendarXIcon, KeyIcon, ShieldIcon } from "@/app/icons/icons"
import { Container } from "../container"

export const ThingsToKnow = () => {
  return (
    <section>
      <Container>
        <div className="border-b border-[#ebebeb] py-12">
          <h2 className="mb-8 text-[22px] leading-6.5 font-medium">
            Things to know
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {/* Cancellation policy */}
            <div>
              <CalendarXIcon
                className="mb-4.5 size-6 text-[#222]"
                strokeWidth={1.7}
              />

              <h3 className="mb-3.5 text-base font-medium">
                Cancellation policy
              </h3>

              <p className="mb-2 text-sm leading-normal">
                Free cancellation before 17 October. Cancel before check-in on
                18 October for a partial refund.
              </p>

              <p className="mb-2 text-sm leading-normal">
                Review this host's full policy for details.
              </p>

              <button className="cursor-pointer border-0 bg-transparent p-0 text-sm font-medium underline underline-offset-2">
                Learn more
              </button>
            </div>

            {/* House rules */}
            <div>
              <KeyIcon
                className="mb-4.5 size-6 text-[#222]"
                strokeWidth={1.7}
              />

              <h3 className="mb-3.5 text-base font-medium">House rules</h3>

              <p className="mb-2 text-sm leading-normal">
                Check-in after 2:00 pm
              </p>

              <p className="mb-2 text-sm leading-normal">
                Checkout before 11:00 am
              </p>

              <p className="mb-2 text-sm leading-normal">3 guests maximum</p>

              <button className="cursor-pointer border-0 bg-transparent p-0 text-sm font-medium underline underline-offset-2">
                Learn more
              </button>
            </div>

            {/* Safety */}
            <div>
              <ShieldIcon
                className="mb-4.5 size-6 text-[#222]"
                strokeWidth={1.7}
              />

              <h3 className="mb-3.5 text-base font-medium">
                Safety & property
              </h3>

              <p className="mb-2 text-sm leading-normal">
                Carbon monoxide alarm not reported
              </p>

              <p className="mb-2 text-sm leading-normal">
                Smoke alarm not reported
              </p>

              <p className="mb-2 text-sm leading-normal">
                Exterior security cameras on property
              </p>

              <button className="cursor-pointer border-0 bg-transparent p-0 text-sm font-medium underline underline-offset-2">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
