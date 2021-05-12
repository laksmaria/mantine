import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

interface PopoverStyles {
  theme: MantineTheme;
  gutter: number;
  arrowSize: number;
}

const horizontalPlacement = (arrowSize: number) => ({
  '&$center': {
    top: '50%',
    transform: 'translateY(-50%)',

    '& $arrow': {
      top: `calc(50% - ${arrowSize}px)`,
    },
  },

  '&$end': {
    bottom: 0,
    '& $arrow': {
      bottom: arrowSize * 2,
    },
  },

  '&$start': {
    top: 0,

    '& $arrow': {
      top: arrowSize * 2,
    },
  },
});

const verticalPlacement = (arrowSize: number) => ({
  '&$center': {
    left: '50%',
    transform: 'translateX(-50%)',

    '& $arrow': {
      left: `calc(50% - ${arrowSize}px)`,
    },
  },

  '&$end': {
    right: 0,
    '& $arrow': {
      right: arrowSize * 2,
    },
  },

  '&$start': {
    left: 0,

    '& $arrow': {
      left: arrowSize * 2,
    },
  },
});

export default createUseStyles({
  center: {},
  start: {},
  end: {},

  wrapper: {
    position: 'relative',
    display: 'inline-block',
    background: 'red',
  },

  popover: {
    position: 'absolute',
  },

  arrow: ({ theme, arrowSize }: PopoverStyles) => ({
    width: arrowSize * 2,
    height: arrowSize * 2,
    position: 'absolute',
    transform: 'rotate(45deg)',
    border: `1px solid ${theme.colors.gray[2]}`,
    background: 'white',
    zIndex: 1,
  }),

  body: ({ theme }: PopoverStyles) => ({
    position: 'relative',
    border: `1px solid ${theme.colors.gray[2]}`,
    boxShadow: theme.shadows.md,
    borderRadius: theme.radius.sm,
    padding: 20,
  }),

  control: {
    zIndex: 1,
  },

  left: ({ gutter, arrowSize }: PopoverStyles) => ({
    ...horizontalPlacement(arrowSize),
    right: `calc(100% + ${gutter}px)`,

    '& $arrow': {
      right: -arrowSize,
      borderLeft: 0,
      borderBottom: 0,
    },
  }),

  right: ({ gutter, arrowSize }: PopoverStyles) => ({
    ...horizontalPlacement(arrowSize),
    left: `calc(100% + ${gutter}px)`,

    '& $arrow': {
      left: -arrowSize,
      borderRight: 0,
      borderTop: 0,
    },
  }),

  top: ({ gutter, arrowSize }: PopoverStyles) => ({
    ...verticalPlacement(arrowSize),
    bottom: `calc(100% + ${gutter}px)`,

    '& $arrow': {
      bottom: -arrowSize,
      borderLeft: 0,
      borderTop: 0,
    },
  }),

  bottom: ({ gutter, arrowSize }: PopoverStyles) => ({
    ...verticalPlacement(arrowSize),
    top: `calc(100% + ${gutter}px)`,

    '& $arrow': {
      top: -arrowSize,
      borderRight: 0,
      borderBottom: 0,
    },
  }),
});
