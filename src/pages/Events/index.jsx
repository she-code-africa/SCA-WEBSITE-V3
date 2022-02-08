import React from "react";
import Text from "../../components/Text";
import Header from "../../components/Header";
const Events = () => {
  return (
    <>
      <Header page={'events'} />
      <main>
        Events page
        <Text
          topic="Upcoming Events"
          sub_topic="View our upcoming programs and discover events curated to match your technical passion and skills."
        />
      </main>
    </>
  )
}

export default Events