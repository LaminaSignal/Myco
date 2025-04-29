import { MantineProvider, Button, Title } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <div style={{ padding: 40 }}>
        <Title order={1}>Welcome to Myco 🌱</Title>
        <Button color="grape" size="md" radius="md" style={{ marginTop: 20 }}>
          Connect to the Network
        </Button>
      </div>
    </MantineProvider>
  );
}

export default App;
