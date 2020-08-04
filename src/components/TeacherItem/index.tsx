import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/media/EeGhrJiWkAApnG8?format=jpg&name=small" alt="Dua Lipa"/>
        <div>
          <strong>Dua Lipa</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        If you don't wanna see me dancing with somebody
        If you wanna believe that anything could stop me
        <br/><br/>
        Don't show up, don't come out
        Don't start caring about me now
        Walk away, you know how
        Don't start caring about me now
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>$ 80.00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;