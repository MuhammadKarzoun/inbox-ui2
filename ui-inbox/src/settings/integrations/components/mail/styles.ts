import { colors, dimensions } from '@octobots/ui/src/styles';

import { Attachment } from '@octobots/ui-inbox/src/inbox/styles';
import { SelectWrapper } from '@octobots/ui/src/components/form/styles';
import { rgba } from '@octobots/ui/src/styles/ecolor';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';

const AttachmentContainer = styled(Attachment)`
  padding: 3px 8px;
  border-radius: 2px;
  margin: 0 5px 5px 0;
  color: ${colors.colorWhite};

  i {
    cursor: pointer;
    opacity: 0.6;
    transition: opacity ease 0.3s;
    font-size: 12px;

    &:hover {
      opacity: 1;
    }
  }
`;

const FileSize = styled.div`
  font-size: 90%;
  opacity: 0.9;
`;

const Uploading = styled.div`
  display: flex;
  align-items: baseline;
  color: ${colors.colorCoreGray};
  font-size: 12px;
`;

const ControlWrapper = styled.div`
  position: relative;
`;

const LeftSection = styled.div`
  position: absolute;
  top: 0;
  inset-inline-end: 0;
  margin: 5px 10px 0 0;
`;

const MailEditorWrapper = styled.div`
  position: relative;
  background: ${colors.colorWhite};
  overflow-y: hidden;
  min-height: 350px;

  .cke_contents {
    min-height: 350px;
  }

  .cke {
    border: 0;
    border-bottom: 1px solid ${colors.borderPrimary};
  }

  .cke_inner {
    position: relative;

    .cke_resizer {
      display: none;
    }

    .cke_bottom {
      background: ${colors.bgLight};
      padding-inline-start: ${dimensions.coreSpacing}px;
      padding-inline-end: ${dimensions.coreSpacing}px;
      border-top: 1px solid ${colors.borderPrimary};
      max-height: 60px;
      overflow: hidden;
    }
  }

  .cke_toolgroup {
    border: 0;
    margin-inline-start	: ${dimensions.unitSpacing / 2}px;
  }
`;

const Resipients = styledTS<{ $isActive?: boolean }>(styled.a)`
  padding-inline-start: ${dimensions.unitSpacing}px;
  font-size: 12px;
  color: ${colors.colorCoreLightGray};
  display: ${props => props.$isActive && 'none'};
  font-weight: 500;

  &:hover {
    cursor: pointer;
    color: ${colors.colorCoreGray};
  }
`;

const EditorFooter = styled.div`
  padding: ${dimensions.unitSpacing}px ${dimensions.coreSpacing}px;
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const EditorFooterGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const Attachments = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 6px ${dimensions.coreSpacing}px 2px ${dimensions.coreSpacing}px
  border-bottom: 1px solid ${colors.borderPrimary};
`;

const FlexRow = styledTS<{ $isEmail?: boolean }>(styled.div)`
  display: flex;
  align-items: center;
  height: ${props => props.$isEmail && '28px'};

  > label {
    margin: ${props =>
      props.$isEmail
        ? `auto ${dimensions.unitSpacing}px auto 0`
        : `2px ${dimensions.unitSpacing}px 2px 0`};
    color: ${colors.colorCoreGray};
    align-self: baseline;
  }
`;

const ToolBar = styled.div`
  display: flex;
  align-items: center;

  i {
    font-size: 18px;
    color: ${colors.colorLightGray};
  }

  label {
    background: none !important;
    color: ${colors.colorCoreGray};
    margin-inline-end: 10px !important;
    font-size: 14px;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    padding: 0 !important;
    display: block;

    &:hover {
      cursor: pointer;
    }
  }

  input[type='file'] {
    display: none;
  }
`;

const SpaceBetweenRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  textarea,
  input,
  ${SelectWrapper} {
    height: ${dimensions.coreSpacing}px;
    border-bottom: 0;
    padding: 0;
    min-height: auto;
  }

  ${SelectWrapper} {
    width: auto;
    display: inline-flex;
    padding-inline-end: 10px;
    background: ${colors.bgActive};

    &:after {
      top: 5px;
    }

    select {
      height: ${dimensions.coreSpacing}px;
    }
  }
`;

const Subject = styledTS<{ noBorder?: boolean }>(styled.div)`
  padding: ${dimensions.unitSpacing - 2}px ${dimensions.coreSpacing}px;
  border-bottom:${props =>
    !props.noBorder && `1px solid ${colors.borderPrimary}`};

  input {
    height: ${dimensions.coreSpacing}px;
    border-bottom: 0;
  }
`;

const ShowReplyButtonWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 50px;
  bottom: 42px;
`;

const ShowReplies = styled.div`
  background-color: #eee;
  margin-inline-start	: 20px;
  margin-top: 10px;
  width: 35px;
  height: 11px;
  display: flex;
  border-radius: 8px;
  padding: 3px;
  justify-content: space-evenly;
  cursor: pointer;

  span {
    overflow: hidden;
    height: 5px;
    width: 5px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: ${colors.colorLightGray};
  }
`;

const PopoverLinkWrapper = styled.div`
  padding: ${dimensions.unitSpacing - 5}px ${dimensions.coreSpacing}px;

  a > i {
    padding-inline-end: ${dimensions.unitSpacing - 5}px;
  }

  &:hover {
    a {
      color: #666;
    }
  }
`;

const Meta = styledTS<{ toggle?: boolean }>(styled.div)`
  padding: ${dimensions.unitSpacing - 2}px ${dimensions.coreSpacing}px;
  display: flex;
  align-items: baseline;
  border-bottom: ${props =>
    props.toggle ? 0 : `1px solid ${colors.borderPrimary}`};


  &:hover {
    cursor: pointer;
  }
`;

const NewEmailHeader = styled.h5`
  background: ${rgba(colors.colorSecondary, 0.1)};
  color: ${colors.colorSecondary};
  margin-bottom: 0;
  margin-top: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 100%;

  i {
    margin-inline-start	: 5px;
    padding: 5px;
    border-radius: 5px;
    transition: all ease 0.3s;

    &:hover {
      background: ${rgba(colors.colorSecondary, 0.3)};
    }
  }

  span {
    flex: 1;
  }
`;

const WidgetWrapper = styledTS<{
  $show: boolean;
  $shrink: boolean;
  $fullScreen?: boolean;
  $haveWidgets?: boolean;
}>(styled.div)`
  position: fixed;
  flex-direction: column;
  z-index: 9999;
  justify-content: end;
  align-content: flex-end;
  background: #fff;
  border-radius: 8px;
  width: ${({ $fullScreen, $shrink }) =>
    $fullScreen ? '75vw' : $shrink ? '260px' : '600px'};
  ${({ $fullScreen, $haveWidgets }) =>
    $fullScreen
      ? `
    inset-inline-start: 50%;
    top: 6%;
    transform: translate(-50%, 0);
    box-shadow: 0 0 0 50vmax rgba(0,0,0,.3);
  `
      : `
    bottom: ${dimensions.unitSpacing}px;
    inset-inline-end: ${$haveWidgets ? '90' : dimensions.coreSpacing}px; 
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 0px 3px -4px;
  `}
  ${({ $show }) => ($show ? 'display: flex;' : 'display:none;')} 
  ${({ $shrink }) => ($shrink ? `h5 {border-radius: 8px;}` : 'overflow: hidden;')} 

  .Select-arrow-zone {
    padding: 0;
  }
`;

const UploaderWrapper = styled.div`
  max-height: 100px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
`;

const WidgetButton = styled.div`
  cursor: pointer;
  text-align: center;
  width: 100%;
  position: relative;
  transition: all 0.3s ease;
  color: ${colors.textSecondary};

  span {
    position: absolute;
    top: -4px;
    inset-inline-end: -8px;
    padding: 3px;
    min-width: 18px;
    min-height: 18px;
    line-height: 12px;
  }
`;

const Link = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SignatureChooserFooter = styledTS<{
  $noSignatures: boolean;
}>(styled.div)`
  display: flex;
  width: 100%;
  justify-content: ${({ $noSignatures }) =>
    $noSignatures ? 'flex-end' : 'space-between'};
  align-items: center;
  padding: 8px 0 8px 1rem;
  border-top: 1px solid #e9ecef;
`;

const SignatureContentWrapper = styledTS<{show: boolean}>(styled.div)`
  height: ${props => props.show ? 'fit-content': 0};
  transition: all ease 3s;
  overflow: hidden;

  p {
    margin: 0;
  }
`;

const SignatureOptionWrapper = styled.div`
  min-width: 260px;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;

  i {
    cursor: pointer;
    margin-inline-start	: auto;
  }
`;

const SignatureHiderButton = styled.button`
  all: unset;
  color: ${colors.textSecondary};
  &:hover {
    cursor: pointer;
    color: ${colors.textPrimary};
  }
`;

// dropdown-item
const SignatureDropdownWrapper = styled.div`
  padding: 0.5rem 1rem;

  button {
    border: none;
    text-align: start;
    background: transparent;
    flex: 1;
    padding: 0;
  }
  &:hover {
    cursor: pointer;
    background-color: ${rgba(colors.colorSecondary, 0.2)};
  }

  &.active {
    background-color: ${rgba(colors.colorSecondary, 0.4)};
  }
`;

const SignatureContainer = styled.div`
  max-height: 400px;
  overflow: auto;
`;

export {
  Attachments,
  FlexRow,
  Subject,
  ToolBar,
  MailEditorWrapper,
  ControlWrapper,
  LeftSection,
  Resipients,
  Uploading,
  AttachmentContainer,
  SpaceBetweenRow,
  EditorFooter,
  FileSize,
  ShowReplyButtonWrapper,
  ShowReplies,
  PopoverLinkWrapper,
  Meta,
  NewEmailHeader,
  WidgetWrapper,
  UploaderWrapper,
  WidgetButton,
  Link,
  SignatureChooserFooter,
  SignatureOptionWrapper,
  SignatureHiderButton,
  SignatureDropdownWrapper,
  EditorFooterGroup,
  SignatureContainer,
  SignatureContentWrapper
};
