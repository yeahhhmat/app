import { Button } from "../button"
export default function Modal({ children, handleClose, handleAction }) {
  return (
    <div id="defaultModal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          { children }
          <>
            <Button theme={'alternative'} type={'button'} onClick={handleClose}>
              {'Close'}
            </Button>
          </>
        </div>
      </div>
    </div>
  )
}