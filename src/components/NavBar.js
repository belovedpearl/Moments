import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom';
// import { CurrentUserContext } from '../App';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';


const NavBar = () => {
  // const currentUser = useContext(CurrentUserContext) replaced by the below code
  const currentUser = useCurrentUser()

  const loggedInIcons = <>
                          {/* {currentUser?.username} */}
                          <NavLink 
                            to='/feed' 
                            className={styles.NavLink} 
                            activeClassName={styles.Active}>
                              <i className="fas fa-stream"></i>
                              Feed
                          </NavLink>
                          <NavLink 
                            to='/liked' 
                            className={styles.NavLink} 
                            activeClassName={styles.Active}>
                              <i className="fas fa-heart"></i>
                              Liked
                          </NavLink>
                          <NavLink 
                            to='/' 
                            className={styles.NavLink} 
                            onClick = {() => {}}
                            >
                              <i className="fas fa-sign-out-alt"></i>
                              Sign out
                          </NavLink>
                          <NavLink 
                            to='{/profiles/${currentUser?.profile_id}}' 
                            className={styles.NavLink} 
                            >
                              {/* <img src= {currentUser?.profile_image} /> */}
                              <Avatar 
                                src= {currentUser?.profile_image} 
                                text='profile' 
                                height={40}
                              />
                          </NavLink>
                        </>
  const addPostIcon = <NavLink 
                          to='/posts/create' 
                          className={styles.NavLink} 
                          activeClassName={styles.Active}>
                          <i className="fas fa-plus-square"></i>Add post
                        </NavLink>
  const loggedOutIcons = <>
                      <NavLink 
                       to='/signin' 
                       className={styles.NavLink} 
                       activeClassName={styles.Active}>
                        <i className="fas fa-sign-in-alt"></i>Sign in
                      </NavLink>
                      <NavLink 
                       to='/signup' 
                       className={styles.NavLink} 
                       activeClassName={styles.Active}>
                        <i className="fas fa-user-plus"></i>Sign up
                      </NavLink>
                    </> 
    return (
      <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container>
          <NavLink to='/'>
            <Navbar.Brand>
              <img src={logo} alt="logo" height="45" />
            </Navbar.Brand>
          </NavLink>
          {currentUser && addPostIcon}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-left">
              <NavLink exact to='/' className={styles.NavLink} activeClassName={styles.Active}>
                <i className="fas fa-home"></i>Home
              </NavLink>
              {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;
