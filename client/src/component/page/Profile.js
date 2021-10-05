import React, { useState } from 'react'
import Header from '../home/Header'
import Footer from '../home/Footer'
import Modal from '../home/Modal'
import Axios from 'axios'
import { connect } from 'react-redux'
import './Profile.css'

const Profile = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [formContent, setFormContent] = useState('')

  const goBack = () => {
    window.history.back()
  }

  return (
    <div className='profile-container'>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {formContent === 'password' ? (
          <ChangePass id={props.data.user.id} />
        ) : formContent === 'name' ? (
          <NameEdit id={props.data.user.id} />
        ) : formContent === 'address' ? (
          <AddressEdit id={props.data.user.id} />
        ) : formContent === 'phone' ? (
          <PhoneEdit id={props.data.user.id} />
        ) : (
          <></>
        )}
      </Modal>

      <div>
        <Header value='' />
        <div className='profile-back'>
          <p onClick={goBack}>&#60; Back</p>
        </div>
      </div>

      <div className='profile-wrapper'>
        <div className='profile-content'>
          <h3>Profile</h3>
          {props.isLoading ? (
            <h3 className='loading-text'>Loading</h3>
          ) : props.isError ? (
            <h3 className='loading-text'>Error</h3>
          ) : (
            <>
              <table>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>{props.data.user.email}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>{props.data.user.name}</td>
                    <td>
                      <i
                        className='fa fa-edit'
                        onClick={() => {
                          setFormContent('name')
                          setIsOpen(true)
                        }}
                      ></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>{props.data.user.address}</td>
                    <td>
                      <i
                        className='fa fa-edit'
                        onClick={() => {
                          setFormContent('address')
                          setIsOpen(true)
                        }}
                      ></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{props.data.user.phone}</td>
                    <td>
                      <i
                        className='fa fa-edit'
                        onClick={() => {
                          setFormContent('phone')
                          setIsOpen(true)
                        }}
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <p
                  onClick={() => {
                    setFormContent('password')
                    setIsOpen(true)
                  }}
                  className='change-password'
                >
                  change password
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

const ChangePass = (props) => {
  const [oldPass, setOldPass] = useState('')
  const [oldPassVal, setOldPassVal] = useState(false)
  const [oldPassValMsg, setOldPassValMsg] = useState('')
  const [newPass, setNewPass] = useState('')
  const [newPassVal, setNewPassVal] = useState(false)
  const [newPassValMsg, setNewPassValMsg] = useState('')
  const [rePass, setRePass] = useState('')
  const [rePassVal, setRePassVal] = useState(false)
  const [rePassValMsg, setRePassValMsg] = useState('')

  const changePass = () => {
    if (oldPass && newPass === rePass) {
      Axios.put(
        'https://market-tritera-erlangga.herokuapp.com/user/profile/password',
        {
          id: props.id,
          oldPass: oldPass,
          newPass: newPass,
        }
      )
        .then((res) => {
          if (res.data.success) {
            window.location.reload()
          } else {
            setOldPassValMsg(res.data.message)
            setOldPassVal(true)
          }
        })
        .catch(() => {
          alert('something went wrong')
        })
    }

    // check old pass validation
    if (oldPass) {
      setOldPassVal(false)
    } else {
      setOldPassValMsg("field can't be blank")
      setOldPassVal(true)
    }

    // check new password validation
    if (newPass) {
      setNewPassVal(false)
    } else {
      setNewPassValMsg("field can't be blank")
      setNewPassVal(true)
    }

    // check retype password validation
    if (rePass) {
      if (newPass !== rePass) {
        setRePassValMsg(`your password didn't match`)
        setRePassVal(true)
      } else {
        setRePassVal(false)
      }
    } else {
      setRePassValMsg("field can't be blank")
      setRePassVal(true)
    }
  }

  const onEnterPress = (e) => {
    if (e.code === 'Enter') {
      changePass()
    }
  }

  return (
    <div className='profile-edit'>
      <h3>Change Password</h3>
      <br />
      <label htmlFor='old-password'>Old Password</label>
      <input
        type='password'
        id='old-password'
        placeholder='old password'
        className={oldPassVal ? 'danger' : ''}
        onChange={(e) => setOldPass(e.target.value)}
        value={oldPass}
        maxLength='255'
        onKeyDown={onEnterPress}
        required
      />
      {oldPassVal && <p className='profile-edit-validation'>{oldPassValMsg}</p>}
      <label htmlFor='new-password'>New Password</label>
      <input
        type='password'
        id='new-password'
        placeholder='new password'
        className={newPassVal ? 'danger' : ''}
        onChange={(e) => setNewPass(e.target.value)}
        value={newPass}
        maxLength='255'
        onKeyDown={onEnterPress}
        required
      />
      {newPassVal && <p className='profile-edit-validation'>{newPassValMsg}</p>}
      <label htmlFor='re-password'>Retype Password</label>
      <input
        type='password'
        id='re-password'
        placeholder='re-type password'
        className={rePassVal ? 'danger' : ''}
        onChange={(e) => setRePass(e.target.value)}
        value={rePass}
        maxLength='255'
        onKeyDown={onEnterPress}
        required
      />
      {rePassVal && <p className='profile-edit-validation'>{rePassValMsg}</p>}
      <div className='center'>
        <button onClick={changePass}>Submit</button>
      </div>
    </div>
  )
}

const NameEdit = (props) => {
  const [name, setName] = useState('')
  const [nameVal, setNameVal] = useState(false)
  const [nameValMsg, setNameValMsg] = useState('')

  const nameSubmit = () => {
    if (name) {
      Axios.put('https://market-tritera-erlangga.herokuapp.com/user/profile', {
        id: props.id,
        name: name,
      })
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem('user', res.data.data)
            window.location.reload()
          }
        })
        .catch(() => {
          alert('something went wrong')
        })
    } else {
      setNameValMsg("field can't be blank")
      setNameVal(true)
    }
  }

  const onEnterPress = (e) => {
    if (e.code === 'Enter') {
      nameSubmit()
    }
  }

  return (
    <div className='profile-edit'>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        id='name'
        placeholder='name'
        className={nameVal ? 'danger' : ''}
        onChange={(e) => setName(e.target.value)}
        value={name}
        maxLength='255'
        onKeyDown={onEnterPress}
        required
      />
      {nameVal && <p className='profile-edit-validation'>{nameValMsg}</p>}
      <div className='center'>
        <button onClick={nameSubmit}>Submit</button>
      </div>
    </div>
  )
}

const AddressEdit = (props) => {
  const [address, setAddress] = useState('')
  const [addressVal, setAddressVal] = useState(false)
  const [addressValMsg, setAddressValMsg] = useState('')

  const addressSubmit = () => {
    if (address) {
      Axios.put('https://market-tritera-erlangga.herokuapp.com/user/profile', {
        id: props.id,
        address: address,
      })
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem('user', res.data.data)
            window.location.reload()
          }
        })
        .catch(() => {
          alert('something went wrong')
        })
    } else {
      setAddressValMsg("field can't be blank")
      setAddressVal(true)
    }
  }

  const onEnterPress = (e) => {
    if (e.code === 'Enter') {
      addressSubmit()
    }
  }

  return (
    <div className='profile-edit'>
      <label htmlFor='address'>Address</label>
      <input
        type='text'
        id='address'
        placeholder='address'
        className={addressVal ? 'danger' : ''}
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        maxLength='255'
        onKeyDown={onEnterPress}
        required
      />
      {addressVal && <p className='profile-edit-validation'>{addressValMsg}</p>}
      <div className='center'>
        <button onClick={addressSubmit}>Submit</button>
      </div>
    </div>
  )
}

const PhoneEdit = (props) => {
  const [phone, setPhone] = useState('')
  const [phoneVal, setPhoneVal] = useState(false)
  const [phoneValMsg, setPhoneValMsg] = useState('')

  const phoneSubmit = () => {
    if (phone) {
      Axios.put('https://market-tritera-erlangga.herokuapp.com/user/profile', {
        id: props.id,
        phone: phone,
      })
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem('user', res.data.data)
            window.location.reload()
          }
        })
        .catch(() => {
          alert('something went wrong')
        })
    } else {
      setPhoneValMsg("field can't be blank")
      setPhoneVal(true)
    }
  }

  const onEnterPress = (e) => {
    if (e.code === 'Enter') {
      phoneSubmit()
    }
  }

  return (
    <div className='profile-edit'>
      <label htmlFor='phone'>Phone</label>
      <input
        type='tel'
        id='phone'
        placeholder='081234567890'
        className={phoneVal ? 'danger' : ''}
        onChange={(e) => setPhone(e.target.value.replace(/\D/, ''))}
        value={phone}
        maxLength='20'
        onKeyDown={onEnterPress}
        required
      />
      {phoneVal && <p className='profile-edit-validation'>{phoneValMsg}</p>}
      <div className='center'>
        <button onClick={phoneSubmit}>Submit</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
