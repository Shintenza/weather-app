import loadable from '@loadable/component';
import { IconBaseProps, IconType } from 'react-icons';

interface IProps {
  name: string;
  iconProps?: IconBaseProps;
}

export const Icon = ({ name, iconProps }: IProps) => {
  const AsyncIcon = loadable(() => import(`react-icons/lu`), {
    resolveComponent: (components) => components[name as keyof IconType],
  });

  return <AsyncIcon {...iconProps} />;
};
