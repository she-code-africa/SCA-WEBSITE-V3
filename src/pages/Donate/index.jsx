import React from "react";
import { DonateCard } from "../../components/Cards";
import Header from "../../components/Header";
const Donate = () => {
  return (
    <>
      <Header page={'donate'} />
      <main>
        Donate page
        <div className="container mx-auto px-4">
            <DonateCard 
              title="PARTNER WITH US"
              description="Work hand-in-hand with us to achieve our goal of reaching more women in technology across Africa!"
            >
                <button></button>
            </DonateCard>
        </div>
      </main>
    </>
  )
}

export default Donate