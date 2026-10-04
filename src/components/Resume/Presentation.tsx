
interface PresentationItemProps {
  text: string
}

export function ContactItem({ text }: PresentationItemProps) {
  // Plain text (location without href)
  return (
    <div className="group flex items-center text-align-center gap-3 text-sm text-resume-text-secondary">
      <span>{text}</span>
    </div>
  )
}
