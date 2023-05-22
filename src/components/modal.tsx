import { Icon } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { DIMENSIONS } from '~/src/utils/constants';
import colors from '~/theme/colors';

function ModalTester({
  visible,
  toggleModal,
}: {
  visible: boolean;
  toggleModal: () => void;
}) {
  return (
    <Modal
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={toggleModal}
      onBackdropPress={toggleModal}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
    >
      <View
        style={{
          height: 320,
          backgroundColor: colors.common.white,
          alignItems: 'center',
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: DIMENSIONS.width * 0.2,
            height: DIMENSIONS.width * 0.2,
            borderRadius: (DIMENSIONS.width * 0.2) / 2,
            backgroundColor: colors.green[500],
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 30,
          }}
        >
          <Icon
            name="check"
            size={DIMENSIONS.width * 0.7 * 0.2}
            type="octicons"
            color={colors.common.white}
          />
        </View>
        <Text
          variant="bold"
          style={{
            fontSize: 20,
            // textAlign: 'center',
            // color: colors.slate[800],
            // lineHeight: 24,
          }}
        >
          1000 FCFA envoyé
        </Text>
        <Text
          variant="normal"
          style={{
            marginTop: 10,
          }}
        >
          Vous avez envoyé 1000 FCFA à +225 00 00 00 00
        </Text>

        <Button
          title="Terminé"
          onPress={toggleModal}
          containerStyle={{
            width: DIMENSIONS.width * 0.8,
            marginTop: 30,
          }}
        />
      </View>
    </Modal>
  );
}

export const ConfirmDonationModal = ({
  amount,
  paymentMethod,
  cardHolder,
  visible,
  toggleModal,
}: {
  amount: number;
  paymentMethod: string;
  cardHolder: string;
  visible: boolean;
  toggleModal: () => void;
}) => (
  <Modal
    isVisible={visible}
    swipeDirection="down"
    onSwipeComplete={toggleModal}
    onBackdropPress={toggleModal}
    style={{
      justifyContent: 'flex-end',
      margin: 0,
    }}
  >
    <View
      style={{
        height: 320,
        backgroundColor: colors.common.white,
        alignItems: 'center',
        borderRadius: 10,
      }}
    >
      <View
        style={{
          width: DIMENSIONS.width * 0.2,
          height: DIMENSIONS.width * 0.2,
          borderRadius: (DIMENSIONS.width * 0.2) / 2,
          backgroundColor: colors.green[500],
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 30,
        }}
      >
        <Icon
          name="check"
          size={DIMENSIONS.width * 0.7 * 0.2}
          type="octicons"
          color={colors.common.white}
        />
      </View>
      <Text
        variant="bold"
        style={{
          fontSize: 20,
          // textAlign: 'center',
          // color: colors.slate[800],
          // lineHeight: 24,
        }}
      >
        Hey {cardHolder} ! Thanks for your donation
      </Text>
      <Text
        variant="normal"
        style={{
          marginTop: 10,
        }}
      >
        You have donated {amount} FCFA with {paymentMethod ?? 'mastercard'}
      </Text>

      <Button
        title="Terminé"
        onPress={toggleModal}
        containerStyle={{
          width: DIMENSIONS.width * 0.8,
          marginTop: 30,
        }}
      />
    </View>
  </Modal>
);

export default ModalTester;
