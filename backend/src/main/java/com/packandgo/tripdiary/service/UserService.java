package com.packandgo.tripdiary.service;

import com.packandgo.tripdiary.enums.Gender;
import com.packandgo.tripdiary.model.User;
import com.packandgo.tripdiary.model.UserInfo;

import java.util.Date;

public interface UserService {
    public User findUserByEmail(String email);

    public User findUserByUsername(String username);

    public User findUserByUsernameOrEmail(String usernameOrEmail);

    public UserInfo findUserInfoByUsername(String username);

    public boolean existsByUsername(String username);

    public boolean existsByEmail(String email);

    public String createPasswordResetTokenForUser(User user);

    public void register(User user, String siteURL) throws Exception;

    public void changePassword(User user, String newPassword);

    public boolean verify(String verifyToken);

    public void removeUser(String username);

    public void saveUserInfo(UserInfo info);

    public void updateUserInfo(UserInfo userInfo, String firstName, String lastName, String phoneNumber, String city, String country, Gender gender, Date dateOfBirth, String aboutMe);
}
