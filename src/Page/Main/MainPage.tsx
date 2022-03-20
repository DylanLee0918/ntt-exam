import React, { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import styled from 'styled-components';
import DataGrid, { TableData, TableRow } from '../../components/DataGrid/index';
import { connect, ConnectedProps } from 'react-redux';
import * as countryActions from '../../modules/country/actions';
import { RootState } from '../../modules/reducers';
import { Country } from '../../modules/country/types';

const Container = styled.div`
    height: 100vh;
    background-color: #F2F7FF;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const BoxElement = styled.div`
    /* flex-grow: 1; */
`;

const Navbar = styled.div`
    position: static;
    height: 65px;
    min-height: 65px;
    width: 100vw;
    display: flex;
    padding: 5px 0px;
    align-items: center !important;
    background-color: #435EBE;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   
`;

const ElementContainer = styled.div`
    width: 100%;
    height: 55px;
    padding: 0px 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 720px) {
        display: flex;
        align-items: center;
        padding: 0px 15px;
    }
`;

const StyledTextField = styled(TextField)`
    &.MuiTextField-root {
        padding: 5px 0px;
    }
`;

const ReturnButton = styled(Button)`
    &.MuiButton-root {
        height: 35px;
        font-size: 0.9rem;
        color: #25396F;
        background-color: #FFF;
        border-radius: 6px;
    }
`;

type TableAllCountries = Country

type Props = ReduxProps;

const MainPage: FunctionComponent<Props> = ({ getCountryList, countryList }) => {

    const redirect = useNavigate();

    const [searchCountry, setSearchCountry] = useState('');

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchCountry(e.target.value);
	};

    useEffect(() => {
		getCountryList();
	}, [getCountryList])

    const redirectToLogin = () => {
        setTimeout(() => {
            redirect('/');
        }, 800)
    }

    const columns = {
        code: 'Code',
        name: 'Name',
        population: 'Population',
        confirmed: 'Confirmed',
        recovered: 'Recovered',
        critical: 'Critical',
        deaths: 'Deaths',
	};

    return (
        <>
            <Container>
                <BoxElement>
                     <Navbar>
                         <ElementContainer>
                            <StyledTextField placeholder='Search Country...' onChange={onSearchChange} value={searchCountry}/>
                            <ReturnButton onClick={redirectToLogin}>Logout</ReturnButton>
                         </ElementContainer>
                     </Navbar>
                </BoxElement>
                <DataGrid<TableAllCountries>
                    columns={Object.keys(columns).map((c) => columns[c as keyof typeof columns])}>
                    {countryList.length > 0 &&
                        countryList.filter((c: Country) => 
                            c.name.toLowerCase().includes(searchCountry.toLowerCase())
                        )
                        .map((country, index) => {
                            return (
                                <TableRow key={index}>
                                <TableData>{country.code}</TableData>
                                    <TableData>{country.name}</TableData>
                                    <TableData>{country.population}</TableData>
                                    <TableData>{country.latest_data.confirmed}</TableData>
                                    <TableData>{country.latest_data.recovered}</TableData>
                                    <TableData>{country.latest_data.critical}</TableData>
                                    <TableData>{country.latest_data.deaths}</TableData>
                                </TableRow>
                            );
                        })
                    }
                </DataGrid>
            </Container>
        </>
    );    
};


const mapStateToProps = (state: RootState) => ({
	countryList: state.country.countries.list,
});

const mapDispatchToProps = {
	getCountryList: countryActions.getCountryList
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(MainPage);
