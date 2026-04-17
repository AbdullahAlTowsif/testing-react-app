type PrimaryButtonProps = {action?: string}

const PrimaryButton = ({action = 'Add'}: PrimaryButtonProps) => {
  return (
    <button className="text-red-500 mr-3 hover:cursor-pointer">click to {action}</button>
  )
}

export default PrimaryButton;
