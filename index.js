const Button = props => {
  const {buttonText, buttonStyling} = props
  return <button className={`button ${buttonStyling}`}> {buttonText}</button>
}

const element = (
  <div className='bg-container'>
    <div className='card-container'>
    <h1 className='heading'> Social Buttons</h1>
      <div className='button-container'>
        <Button buttonText='Like' buttonStyling='like-button' />
        <Button buttonText='Comment' buttonStyling='comment-button' />
        <Button buttonText='Share' buttonStyling='share-button' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
