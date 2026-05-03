import React, {useContext, useMemo} from 'react';
import {View} from 'react-native';
import styles from './AddTransactionSheet.styles.ts';
import {AddTransactionBottomSheetProps} from './interfaces.ts';
import {ThemeContext} from '../../../../r.presentation/context/ThemeContext.tsx';
import Text from '../Text/Text.tsx';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {TransactionButton} from '../TransactionButton/TransactionButton.tsx';

export const AddTransactionBottomSheet = ({
  bottomSheetRef,
  onPressExpense,
}: AddTransactionBottomSheetProps) => {
  const {colors} = useContext(ThemeContext);

  const snapPoints = useMemo(() => ['32%'], []);

  const renderBackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...props}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      pressBehavior="close"
      opacity={0.45}
    />
  );

  const handlePressExpense = () => {
    bottomSheetRef.current?.dismiss();
    onPressExpense();
  };

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: colors.cardBackground,
        borderRadius: 28,
      }}
      handleIndicatorStyle={{
        backgroundColor: colors.border,
        width: 44,
      }}>
      <BottomSheetView style={styles.content}>
        <Text
          size={20}
          weight={800}
          style={[
            {
              color: colors.text,
            },
          ]}>
          ¿Qué querés agregar?
        </Text>

        <View style={styles.actionsContainer}>
          <TransactionButton
            handlePressIncome={handlePressExpense}
            icon={'add'}
            text={'Agregar un ingreso'}
          />
          <TransactionButton
            handlePressIncome={handlePressExpense}
            icon={'remove'}
            text={'Agregar un retiro'}
          />
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};
export class AddTransactionSheet {}
