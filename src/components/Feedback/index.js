// Write your React code here.
import {Component} from 'react'

import './index.css'

const Emojis = props => {
  const {eachEmojisDetails, onClickEmoji} = props
  const {name, imageUrl} = eachEmojisDetails
  return (
    <li className="emojiItem">
      <button className="button" type="button" onClick={onClickEmoji}>
        <img src={imageUrl} className="emojiImage" alt={name} />
        <p className="emojiName">{name}</p>
      </button>
    </li>
  )
}

class Feedback extends Component {
  state = {isFeedbackSubmitted: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSubmitted: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    // const {isFeedbackSubmitted} = this.state
    return (
      <div className="emoji-card">
        <h1 className="emoji-card-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="listItemsContainer">
          {emojis.map(eachEmojisDetails => (
            <Emojis
              eachEmojisDetails={eachEmojisDetails}
              onClickEmoji={this.onClickEmoji}
              key={eachEmojisDetails.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    // const {isFeedbackSubmitted} = this.state
    return (
      <div className="thankYou-container">
        <img src={loveEmojiUrl} className="love-style" alt="love emoji" />
        <h1 className="love-heading">Thank You</h1>
        <p className="feedback-description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isFeedbackSubmitted} = this.state

    return (
      <div className="bg-container">
        {isFeedbackSubmitted
          ? this.renderThankyouScreen()
          : this.renderFeedbackQuestion()}
        {/* this represents in the class,we are used () because we are calling it,
          calling means we are returning something,but in normal cases we are not calling
          because we are not returning anything from them.
          example onDelete /onclick method we are not use () because we just making an action we dont
          get any return statement from them 
          and we are not using const because it returns */}
      </div>
    )
  }
}

export default Feedback
