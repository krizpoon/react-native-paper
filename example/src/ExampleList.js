/* @flow */

import * as React from 'react';
import { FlatList } from 'react-native';
import { ListSection, Divider, withTheme } from 'react-native-paper';
import BannerExample from './BannerExample';
import BottomNavigationExample from './BottomNavigationExample';
import ButtonExample from './ButtonExample';
import CardExample from './CardExample';
import CheckboxExample from './CheckboxExample';
import ChipExample from './ChipExample';
import DialogExample from './DialogExample';
import DividerExample from './DividerExample';
import FABExample from './FABExample';
import ListAccordionExample from './ListAccordionExample';
import ListSectionExample from './ListSectionExample';
import ProgressBarExample from './ProgressBarExample';
import RadioButtonExample from './RadioButtonExample';
import RadioButtonGroupExample from './RadioButtonGroupExample';
import RippleExample from './RippleExample';
import SearchbarExample from './SearchbarExample';
import SnackbarExample from './SnackbarExample';
import SurfaceExample from './SurfaceExample';
import SwitchExample from './SwitchExample';
import TextExample from './TextExample';
import TextInputExample from './TextInputExample';
import AppbarExample from './AppbarExample';
import type { Theme } from 'react-native-paper/types';

type Props = {
  theme: Theme,
  navigation: any,
};

export const examples = {
  appbar: AppbarExample,
  banner: BannerExample,
  bottomNavigation: BottomNavigationExample,
  button: ButtonExample,
  card: CardExample,
  checkbox: CheckboxExample,
  chip: ChipExample,
  dialog: DialogExample,
  divider: DividerExample,
  fab: FABExample,
  listAccordion: ListAccordionExample,
  listSection: ListSectionExample,
  progressbar: ProgressBarExample,
  radio: RadioButtonExample,
  radioGroup: RadioButtonGroupExample,
  ripple: RippleExample,
  searchbar: SearchbarExample,
  snackbar: SnackbarExample,
  surface: SurfaceExample,
  switch: SwitchExample,
  text: TextExample,
  textInput: TextInputExample,
};

const data = Object.keys(examples).map(id => ({ id, data: examples[id] }));

class ExampleList extends React.Component<Props> {
  static navigationOptions = {
    title: 'Examples',
  };

  _renderItem = ({ item }) => (
    <ListSection.Item
      title={item.data.title}
      onPress={() => this.props.navigation.navigate(item.id)}
    />
  );

  _keyExtractor = item => item.id;

  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props;

    return (
      <FlatList
        contentContainerStyle={{ backgroundColor: background }}
        ItemSeparatorComponent={Divider}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        data={data}
      />
    );
  }
}

export default withTheme(ExampleList);
