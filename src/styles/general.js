import metrics from './metrics';
import fonts from './fonts';
import colors from './colors';

export default {
  toast: {
    width: metrics.screenWidth * 0.85,
    height: metrics.basePadding * 3,
    fontSize: fonts.medium,
    borderRadius: metrics.baseRadius,
  },
  toastSuccess: {
    color: colors.primary,
    backgroundColor: colors.success,
  },
  toastDanger: {
    color: colors.lighter,
    fontWeight: 'bold',
    backgroundColor: colors.danger,
  },
};
