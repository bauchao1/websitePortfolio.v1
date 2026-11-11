import PageHeader from '../components/ui/PageHeader.tsx'
import Button from '../components/ui/Button.tsx'

export default function NotFound() {
  return (
    <PageHeader
      eyebrow="404"
      tabTitle="Page not found"
      title="This page doesn't exist."
      intro="The link may be old or mistyped. Try one of these instead."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/">Go home</Button>
        <Button to="/projects" variant="secondary">
          See projects
        </Button>
      </div>
    </PageHeader>
  )
}
