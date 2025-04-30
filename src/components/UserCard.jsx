import React from 'react';
import LocationIcon from '../assets/icon-location.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import WebsiteIcon from '../assets/icon-website.svg';
import BuildingIcon from '../assets/icon-building.svg';

function UserCard({ user }) {
  return (
    <div className="bg-lightCard dark:bg-darkCard rounded-xl p-8 shadow-md mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full"
        />

        <div className="flex flex-col flex-1">
          <div className="flex flex-col md:flex-row md:justify-between">
            <h2 className="text-2xl font-bold text-primaryText dark:text-whiteText">{user.name || user.login}</h2>
            <p className="text-blue text-sm mt-1 md:mt-0">@{user.login}</p>
          </div>
          <p className="text-secondaryText dark:text-grayText mt-4">
            {user.bio || 'This profile has no bio'}
          </p>

          <div className="flex justify-around bg-lightBg dark:bg-darkBg rounded-lg p-4 mt-6">
            <div className="text-center">
              <p className="text-xs text-secondaryText dark:text-grayText">Repos</p>
              <p className="text-lg font-bold">{user.public_repos}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-secondaryText dark:text-grayText">Followers</p>
              <p className="text-lg font-bold">{user.followers}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-secondaryText dark:text-grayText">Following</p>
              <p className="text-lg font-bold">{user.following}</p>
            </div>
          </div>

      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-secondaryText dark:text-grayText text-sm">
            <div className="flex items-center gap-3">
              <img src={LocationIcon} alt="Location" className="w-5 h-5" />
              <span>{user.location || 'Not Available'}</span>
            </div>

            <div className="flex items-center gap-3">
              <img src={WebsiteIcon} alt="Website" className="w-5 h-5" />
              {user.blog ? (
                <a href={user.blog} target="_blank" rel="noreferrer" className="underline">{user.blog}</a>
              ) : (
                <span>Not Available</span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <img src={TwitterIcon} alt="Twitter" className="w-5 h-5" />
              {user.twitter_username ? `@${user.twitter_username}` : 'Not Available'}
            </div>

            <div className="flex items-center gap-3">
              <img src={BuildingIcon} alt="Company" className="w-5 h-5" />
              <span>{user.company || 'Not Available'}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default UserCard;
