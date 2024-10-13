import Card from './card'

const FlexCard = () => {
  return (
    <Card>
      <Card.Title />
      <Card.Content>
        <div>Flexible Content</div>
      </Card.Content>
      <div style={{ padding: '1rem' }}>Footer</div>
    </Card>
  )
}

export default FlexCard
