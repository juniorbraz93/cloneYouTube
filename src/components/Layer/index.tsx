import React, {FC} from 'react';
import {View, Text} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {styles} from './styles';

interface ITextProps {
  text: string | any;
  subtext: string | any;
  icon?: boolean | false;
}

const Layer: FC<ITextProps> = ({text, subtext, icon}) => {
  function filterDesc(desc: any) {
    if (desc.length < 45) {
      return desc;
    }
    return `${desc.substring(0, 30)}...`;
  }
  return (
    <View>
      <View style={styles.Container}>
        <Text style={styles.Text}>{filterDesc(text)}</Text>
        {icon && (
          <SimpleLineIcons
            name="options-vertical"
            size={16}
            style={styles.Icon}
          />
        )}
      </View>
      <Text style={styles.SubText}>{subtext}</Text>
    </View>
  );
};

export default Layer;
