import React, { useState } from 'react';
import { dispatchUsers } from '../../../redux/app-reducer/reducer';
import { iUser } from '../../../redux/app-reducer/types/user';
import ButtonPrimary from '../../buttons/button-primary/ButtonPrimary';
import Input from '../../input/Input';
import Textarea from '../../textarea/Textarea';
import './UserCardLargeForm.scss';

interface iUserCardLargeForm {
  user: iUser;
  dispatch: dispatchUsers;
  isAbleToEdit: boolean;
}

const UserCardLargeForm: React.FC<iUserCardLargeForm> = ({ user, dispatch, isAbleToEdit }) => {

  const [name, setName] = useState(user.name);
  const [username, setUserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [street, setStreet] = useState(user.address.street);
  const [city, setCity] = useState(user.address.city);
  const [zipcode, setZipcode] = useState(user.address.zipcode);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);
  const [comment, setComment] = useState('');

  const validateForm = () => {
    if (
      name.trim().length > 0 &&
      username.trim().length > 0 &&
      email.trim().length > 0 &&
      street.trim().length > 0 &&
      city.trim().length > 0 &&
      zipcode.trim().length > 0 &&
      phone.trim().length > 0 &&
      website.trim().length > 0
    ) {
      const result = {
        name: name.trim(),
        username: username.trim(),
        email: email.trim(),
        street: street.trim(),
        city: city.trim(),
        zipcode: zipcode.trim(),
        phone: phone.trim(),
        website: website.trim(),
        comment: comment.trim()
      }
      console.log(JSON.stringify(result));
    } else {
      
    }
  }

  return (
    <div>
      <form className='user-card-large-form__wrapper'>
        <Input
          label='Name'
          placeholder={user.name}
          value={name}
          onChange={setName}
          id='name'
          disabled={!isAbleToEdit}
        />
        <Input
          label='User name'
          placeholder={user.username}
          value={username}
          onChange={setUserName}
          id='username'
          disabled={!isAbleToEdit}
        />
        <Input
          label='E-mail'
          placeholder={user.email}
          value={email}
          onChange={setEmail}
          id='email'
          type='email'
          disabled={!isAbleToEdit}
        />
        <Input
          label='Street'
          placeholder={user.address.street}
          value={street}
          onChange={setStreet}
          id='street'
          disabled={!isAbleToEdit}
        />
        <Input
          label='City'
          placeholder={user.address.city}
          value={city}
          onChange={setCity}
          id='city'
          disabled={!isAbleToEdit}
        />
        <Input
          label='Zip code'
          placeholder={user.address.zipcode}
          value={zipcode}
          onChange={setZipcode}
          id='zipcode'
          disabled={!isAbleToEdit}
        />
        <Input label='Phone'
          placeholder={user.phone}
          value={phone}
          onChange={setPhone}
          id='phone'
          type='tel'
          disabled={!isAbleToEdit}
        />
        <Input
          label='Website'
          placeholder={user.website}
          value={website}
          onChange={setWebsite}
          id='website'
          type='url'
          disabled={!isAbleToEdit}
        />
        <Textarea
          label='Comment'
          id='comment'
          value={comment}
          onChange={setComment}
          disabled={!isAbleToEdit}
        />
      </form>
      <div className='large-card__submit-button'>
        <ButtonPrimary
          title='Отправить'
          onClick={() => {
            if (isAbleToEdit) {
              validateForm();
            }
          }}
          disabled={!isAbleToEdit}
          style={isAbleToEdit ? { background: '#52CF4F' } : { background: '#AFAFAF' }}
        />
      </div>
    </div>
  )
};

export default UserCardLargeForm;