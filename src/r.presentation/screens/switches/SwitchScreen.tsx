import {useState} from 'react';
import {CustomView} from '../../../shared/components/ui/CustomView';
import {Card} from '../../../shared/components/ui/Card';
import {CustomSwitch} from '../../../shared/components/ui/CustomSwitch';
import {Separator} from '../../../shared/components/ui/Separator';
import {Title} from '../../../shared/components/ui/Title';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <CustomView style={{paddingHorizontal: 10}}>
      <Title text="Switches" safe />

      <Card>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => setState({...state, isActive: value})}
          text="¿Está activo?"
        />

        <Separator />

        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => setState({...state, isHungry: value})}
          text="¿Tiene hambre?"
        />

        <Separator />

        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => setState({...state, isHappy: value})}
          text="¿Es feliz?"
        />

        {/*
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#8316a4' : '#f4f3f4'}
          ios_backgroundColor="#571818"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}
      </Card>
    </CustomView>
  );
};
