import React, {useState, useEffect} from 'react';
import {FiArrowUp} from 'react-icons/fi'

function Top() {

    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTop(true)
            }
            else{
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <>
        {backToTop && (
            <button style={{
                position: "fixed",
                right: "15px",
                bottom: "20px",
                borderRadius: "4px",
                transition: 'ease-in-out',
                fontSize: "30px",
                cursor: "pointer",
                color: "white",
                border: "none",
                padding: "8px 8px 0 8px ",
                backgroundColor: "#001C41"
            }}
                onClick={scrollUp}
            >
                <FiArrowUp/>
            </button>
        )}
    </>
  )
}

export default Top