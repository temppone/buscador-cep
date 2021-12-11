import { useNavigate } from 'react-router-dom';

import Button from '../../ui/components/Button';
import Head from '../../ui/components/Head';
import MapSection from '../../ui/components/MapSection';
import {
    HomeButtons,
    HomeContainer,
    HomeContent,
    HomeHeader,
    HomeMap,
    HomePresentation,
    HomeSubHeader,
    HomeSubHeaders,
} from './styles';

const Home = (): JSX.Element => {
    const naviage = useNavigate();

    return (
        <HomeContainer>
            <Head
                title="Home"
                description="Essa é a página inicial do BuscadorCEP!"
            />

            <HomeContent>
                <HomePresentation>
                    <HomeHeader>Bem vindo ao BuscadorCEP!</HomeHeader>
                    <HomeSubHeaders>
                        <HomeSubHeader>
                            O aplicativo BuscadorCEP! permite que você encontre
                            códigos de endereçamento postais(CEP).
                        </HomeSubHeader>
                        <HomeSubHeader>
                            Se você já tiver o CEP em mãos e gostaria de buscar
                            seu endereço, o BuscadorCEP! Também vai te ajudar!
                        </HomeSubHeader>
                    </HomeSubHeaders>
                    <HomeButtons>
                        <Button
                            onClick={() => naviage('/buscar-endereco')}
                            name="Buscar endereço"
                        />
                        <Button
                            onClick={() => naviage('/buscar-cep')}
                            name="Buscar CEP"
                        />
                    </HomeButtons>
                </HomePresentation>
                <HomeMap>
                    <MapSection />
                </HomeMap>
            </HomeContent>
        </HomeContainer>
    );
};

export default Home;
