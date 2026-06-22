import { useRef, useState, type FormEvent } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from 'react-toastify'

interface RespostaEnvio {
  message?: string
  error?: string
}

export default function ContactForm() {
  const chaveRecaptcha = import.meta.env.VITE_RECAPTCHA_SITE_KEY
  const [desafioConcluido, setDesafioConcluido] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  function concluirDesafio(token: string | null) {
    setDesafioConcluido(Boolean(token))
  }

  async function enviarFormulario(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    const tokenRecaptcha = recaptchaRef.current?.getValue()
    if (!desafioConcluido || !tokenRecaptcha) return

    const formulario = evento.currentTarget
    const dados = new FormData(formulario)
    setEnviando(true)
    setDesafioConcluido(false)

    try {
      const resposta = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nameContact: dados.get('nameContact'),
          email: dados.get('email'),
          message: dados.get('message'),
          recaptchaToken: tokenRecaptcha,
        }),
      })
      const resultado = await resposta.json().catch(() => ({})) as RespostaEnvio

      if (resposta.ok) {
        formulario.reset()
        toast.success(resultado.message ?? 'Mensagem enviada com sucesso!')
      } else {
        toast.error(resultado.error ?? 'Não foi possível enviar a mensagem.')
      }
    } catch {
      toast.error('Falha de conexão. Tente novamente em alguns instantes.')
    } finally {
      setEnviando(false)
      recaptchaRef.current?.reset()
    }
  }

  return (
    <form className="formulario-contato" onSubmit={enviarFormulario}>
      <label>
        Nome
        <input type="text" name="nameContact" autoComplete="name" required />
      </label>

      <label>
        E-mail
        <input type="email" name="email" autoComplete="email" required />
      </label>

      <label className="campo-completo">
        Mensagem
        <textarea name="message" rows={5} required />
      </label>

      <div className="recaptcha campo-completo">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={chaveRecaptcha}
          onChange={concluirDesafio}
          onExpired={() => setDesafioConcluido(false)}
          onErrored={() => setDesafioConcluido(false)}
        />
      </div>

      <button
        className="botao botao-primario campo-completo"
        type="submit"
        disabled={!desafioConcluido || enviando}
      >
        {enviando ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  )
}
