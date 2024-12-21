import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Grid templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}>
        <GridItem area="nav" bg="purple">Nav</GridItem>

        {useBreakpointValue({ base: false, lg: true }) && (
          <GridItem area="aside" bg="green">Aside</GridItem>
        )}
        
        <GridItem area="main" bg="dodgerblue">Main</GridItem>
      </Grid>
    </>
  );
}

export default App;
