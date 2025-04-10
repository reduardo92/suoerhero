import React from 'react';
import styled from 'styled-components';

const PlayerStyles = styled.div`
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-top: 35px solid ${props => props.bgColor};
  border-radius: 1px;
  background-color: ${props => props.bgColor};
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .content {
    display: flex;
    padding-top: 1em;
  }

  .player--name {
    text-align: center;
    position: absolute;
    top: -21px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 3px;
    border-top: solid 3px #fff;
    border-bottom: solid 3px #fff;
    background-color: #333;
    color: #fff;
    letter-spacing: 1.1px;
    font-size: 1.4rem;
  }

  .power-stats {
    text-align: center;
    background-color: #333;
    border: 0.1px solid #fff;
    width: 71%;
    padding: 1em;
  }

  .stats {
    display: flex;
    justify-content: space-between;
  }

  .stats--name {
    color: #fff;

    &::first-letter {
      font-weight: bold;
      font-size: 1rem;
    }
  }

  .stats--number {
    color: #020202;
    font-weight: 700;
    background-color: yellow;
    padding: 3px;
    align-self: center;
  }

  .far {
    position: absolute;
    z-index: 5;
    top: -18px;
    right: 0;
    background: none;
    color: red;
    border: none;
    font-size: 1.7rem;
    padding: 0.1em;
    transition: opacity 0.3s ease-in-out;

    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }

  .won {
    background-color: #03ff03;
  }
  .lose {
    background-color: red;
  }

  .tie {
    background-color: yellow;
  }

  @media screen and (min-width: 760px) {
    max-width: 280px;
    border-top: 20px solid ${props => props.bgColor};

    .content {
      display: flex;
      padding-top: 1em;
      flex-direction: column;
    }

    .player--name {
      top: 0px;
      padding: 7px;
    }

    .power-stats {
      width: 90%;
      margin: 0.6em;
      align-self: center;
    }

    .far {
      top: 5px;
      font-size: 2rem;
    }
  }
`;

const Player = ({ player, stats, bgColor, removePlayer, setDone }, ref) => (
  <PlayerStyles className='player--card' bgColor={bgColor}>
    <button
      onClick={() => {
        removePlayer(player.id);
        setDone(false);
      }}
      className='far fa-times-circle'
    />
    <h3 className='player--name'>{player.name}</h3>
    <div className='content'>
      <div className='character--img'>
        <img src={player.images.md} alt={player.name} />
      </div>
      <div className='power-stats' ref={ref}>
        {/* <h3>Powerstats</h3> */}
        <div className='stats'>
          <p className='stats--name'>Combat</p>
          <span className='stats--number'>{stats.combat}</span>
        </div>
        <div className='stats'>
          <p className='stats--name'>Power</p>
          <span className='stats--number'>{stats.power}</span>
        </div>
        <div className='stats'>
          <p className='stats--name'>strength</p>
          <span className='stats--number'>{stats.strength}</span>
        </div>
        <div className='stats'>
          <p className='stats--name'>Speed</p>
          <span className='stats--number'>{stats.speed}</span>
        </div>
        <div className='stats'>
          <p className='stats--name'>Durability</p>
          <span className='stats--number'>{stats.durability}</span>
        </div>
        <div className='stats'>
          <p className='stats--name'>Intelligence</p>
          <span className='stats--number'>{stats.intelligence}</span>
        </div>
      </div>
    </div>
  </PlayerStyles>
);

const PlayerCard = React.forwardRef(Player);

export default PlayerCard;

PlayerCard.defaultProps = {
  numberBg: 'yellow'
};
