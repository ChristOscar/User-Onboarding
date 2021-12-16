import React from 'react'

export default function userForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
      }


    return (
    <form onSubmit={onSubmit}>
      <div>
        

        <div>
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.tos}</div>
          <div>{errors.password}</div>
        </div>
      </div>

      <div>
        <div className='UsernameIP'>
        <label>Username
          <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
          />
        </label>
        </div>


        <div className='PasswordIP'>
        <label>Password
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>
        </div>

       <div className='EmailIP'>
       <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>
       </div>

      </div>

      <div className='form-group checkboxes'>
        <label>Terms of Service
          <input
            type='checkbox'
            name='tos'
            checked={values.tos}
            onChange={onChange}
          />
        </label>       

      </div>
      <div className='Buttons'>
      <button id='submitBtn' disabled={disabled}>Submit User</button>
      </div>
    </form>
  )
}