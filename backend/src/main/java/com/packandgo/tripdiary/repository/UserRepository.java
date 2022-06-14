package com.packandgo.tripdiary.repository;

import com.packandgo.tripdiary.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
    Optional<User> findByUsernameOrEmail(String username, String email);
    Boolean existsByUsernameOrEmail(String username, String email);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.verifyToken = ?1")
    public User findByVerifyToken(String verifyToken);

    @Modifying
    @Query("DELETE FROM User u where u.username = ?1")
    public void removeUserByUsername(String username);

    @Query(value = "SELECT user FROM User user JOIN user.trips")
    Page<User> findUsersAndAllTrips(Pageable pageable);

}