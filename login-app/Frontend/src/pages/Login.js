import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const savedUser = localStorage.getItem('username')
    if (savedUser) {
      setUsername(savedUser)
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    setError('')

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('username', username)
      navigate('/welcome')
    } else {
      setError('Invalid credentials')
    }
  }
  return (
    <div style={{textAlign: 'center', marginTop: '100px'}}>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        
              <br />
        
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        
      <br />
        <button type="submit">Login</button>
      </form>

      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}

export default Login
