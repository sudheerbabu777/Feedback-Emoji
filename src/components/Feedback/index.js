// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelect: false,
  }

  onClickEmoji = () => {
    this.setState({isFeedbackSelect: true})
  }

  renderFeedbackSelect = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="feedback-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachFeedback => (
            <li key={eachFeedback.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachFeedback.imageUrl}
                  alt={eachFeedback.name}
                  className="emojis-image"
                />
              </button>
              <p className="emoji-name">{eachFeedback.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="feedback">Thank You!</h1>
        <p className="feedback-response">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelect} = this.state
    return (
      <div className="app-container">
        <div className="bg-container">
          {isFeedbackSelect
            ? this.renderThankYouFeedback()
            : this.renderFeedbackSelect()}
        </div>
      </div>
    )
  }
}

export default Feedback
