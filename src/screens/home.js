import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../redux/reducers/data';
import styles from './screens.module.css'
export default function Home () {
  const navigate = useNavigate ();
  const dispatch = useDispatch ();
  const users = useSelector (state => state.data?.data?.results);
  React.useEffect (
    () => {
      dispatch (getData ());
    },
    [dispatch]
  );
 console.log(users)
  const handleUser = () => {
    dispatch (getData ());
  };
  return (
    <div className={styles.containerHome}>
   
      {users?.map ((user,index) => {
        return (
          <div className={styles.pictureBox} key={index}>
            <img src={user.picture.large} style={{borderRadius: '100%', marginBlock:"20px"}} />
             <div>  <b> {user.name.first} {user.name.last}  </b> </div>

          </div>
        );
      })}
      <div> 
      <button
      onClick={() => {
      navigate ('/produtcs');
      }}>
              navigate
      </button>

            <button onClick={handleUser}>
              Fetch_Redux
            </button>        
        </div>
    
    </div>
  );
}
