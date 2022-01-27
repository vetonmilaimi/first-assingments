import Layout from './components/Layout/Layout';
import Services from './components/Services/Services';
import Cards from './components/Card/Cards';

function App() {
	return (
		<Layout>
			<Services />
			<hr />
			<Cards />
		</Layout>
	);
}

export default App;
