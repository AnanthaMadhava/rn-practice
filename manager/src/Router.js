import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Stack key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Stack>
                <Stack key="main">
                    <Scene 
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees" 
                        initial
                    />
                    <Scene 
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                </Stack>
            </Stack>
        </Router>
    );
};

export default RouterComponent;