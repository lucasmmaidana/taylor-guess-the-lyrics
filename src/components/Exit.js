import React, { useContext } from "react"
import { Context } from "../Context"

function Exit({ song }) {
  const { restartGame } = useContext(Context)
  return (
    <button
      onClick={() => {
        restartGame()
      }}
      className="exit-button"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.02781 0.498431L11.9996 9.47019L20.9344 0.535352C21.091 0.368687 21.2796 0.23536 21.489 0.143367C21.6984 0.0513748 21.9241 0.00261094 22.1528 0C22.6424 0 23.1119 0.194493 23.4581 0.540693C23.8043 0.886893 23.9988 1.35644 23.9988 1.84604C24.0031 2.07237 23.9612 2.29719 23.8754 2.50671C23.7897 2.71622 23.6621 2.90601 23.5004 3.06443L14.4733 11.9993L23.5004 21.0264C23.8047 21.3241 23.9831 21.7271 23.9988 22.1525C23.9988 22.6421 23.8043 23.1116 23.4581 23.4578C23.1119 23.804 22.6424 23.9985 22.1528 23.9985C21.9175 24.0083 21.6828 23.969 21.4635 23.8832C21.2442 23.7974 21.0452 23.667 20.879 23.5001L11.9996 14.5283L3.04627 23.4816C2.89029 23.6428 2.70395 23.7714 2.498 23.8601C2.29205 23.9488 2.07057 23.9959 1.84634 23.9985C1.35674 23.9985 0.887193 23.804 0.540993 23.4578C0.194793 23.1116 0.000300362 22.6421 0.000300362 22.1525C-0.00400367 21.9262 0.0379883 21.7013 0.123699 21.4918C0.20941 21.2823 0.337032 21.0925 0.498732 20.9341L9.52588 11.9993L0.498732 2.97213C0.194476 2.67447 0.0160649 2.27139 0.000300362 1.84604C0.000300362 1.35644 0.194793 0.886893 0.540993 0.540693C0.887193 0.194493 1.35674 0 1.84634 0C2.28939 0.00553812 2.71398 0.184604 3.02781 0.498431Z"
          fill="#6B46C1"
        />
      </svg>
    </button>
  )
}

export default Exit