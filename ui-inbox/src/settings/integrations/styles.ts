import { colors, dimensions } from '@octobots/ui/src/styles';

import { SelectWrapper } from '@octobots/ui/src/components/form/styles';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';

const MessengerPreview = styled.div`
  width: 40%;
`;

const IntegrationName = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-inline-start	: ${dimensions.unitSpacing / 2}px;
  }
`;

const BrandName = styled.div`
  font-size: 11px;
  color: ${colors.colorCoreGray};
`;

const Script = styled.div`
  padding-top: ${dimensions.coreSpacing}px;

  ol {
    padding-inline-start: ${dimensions.coreSpacing}px;
  }
`;

const Options = styled.div`
  font-weight: 500;

  i {
    color: ${colors.colorCoreGray};
    margin-inline-start	: ${dimensions.unitSpacing}px;
    font-weight: normal;
  }
`;

const Description = styled.p`
  text-transform: initial;
`;

const RefreshPermission = styled.div`
  padding-top: ${dimensions.unitSpacing}px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${colors.colorSecondary};
  font-weight: 500;
  opacity: 0.8;
  transition: all ease 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const GoogleButton = styled.a`
  height: 36px;
  width: 150px;
  padding: 3px;
  background: url('/images/googleButton/btn_normal.png') left center no-repeat;
  background-size: contain;
  background-position: 100%;
  margin-inline-start	: 10px;
  transition: background 0.3s ease;
  display: block;
  margin: auto;

  &:hover,
  &:focus {
    background-image: url('/images/googleButton/btn_focus.png');
  }

  &:active {
    background-image: url('/images/googleButton/btn_active.png');
  }
`;

const FacebookButton = styled.button`
  background-color: rgb(66, 103, 178);
  border-color: rgb(66, 103, 178);
  color: ${colors.colorWhite};
  line-height: 16px;
  font-size: 14px;
  padding: 11px 24px;
  font-weight: 500;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  text-align: center;
  transition: all 0.15s ease-out;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;

  i {
    margin-inline-end: 5px;
  }

  &:hover {
    cursor: pointer;
    background-color: rgb(54, 88, 153);
    border-color: rgb(54, 88, 153);
  }
`;

const AccountBox = styled.div`
  border: 1px solid ${colors.borderPrimary};
  margin-bottom: ${dimensions.coreSpacing}px;
`;

const AccountTitle = styled.h3`
  text-transform: uppercase;
  margin: 0;
  padding: 15px 20px;
  border-bottom: 1px solid ${colors.borderPrimary};
  font-size: 13px;
  font-weight: 600;
  background: ${colors.bgLight};
`;

const AccountItem = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${colors.borderPrimary};
  margin-top: -1px;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;

  > span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const TextWrapper = styled.div`
  max-width: 400px;
  h1 {
    font-weight: 400;
    font-size: 24px;
  }

  p {
    font-size: 14px;
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    max-width: calc(100% + 40px);
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    margin-inline-start	: -20px;
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

const MailEditorWrapper = styled.div`
  position: relative;
  background: ${colors.colorWhite};

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

const Resipients = styledTS<{ isActive?: boolean }>(styled.a)`
  padding-inline-start: ${dimensions.unitSpacing}px;
  font-size: 12px;
  color: ${colors.colorCoreLightGray};
  display: ${props => props.isActive && 'none'};
  font-weight: 500;

  &:hover {
    cursor: pointer;
    color: ${colors.colorCoreGray};
  }
`;

const EditorFooter = styled.div`
  padding: ${dimensions.unitSpacing}px ${dimensions.coreSpacing}px;
`;

const Attachments = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 6px ${dimensions.coreSpacing}px 2px ${dimensions.coreSpacing}px
  border-bottom: 1px solid ${colors.borderPrimary};
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;

  > label {
    margin: 2px ${dimensions.unitSpacing}px 2px 0;
    color: ${colors.colorCoreGray};
    align-self: baseline;
  }
`;

const ToolBar = styled.div`
  i {
    font-size: 18px;
    color: ${colors.colorLightGray};
  }

  label {
    color: ${colors.colorCoreGray};
    margin-inline-end: 10px;
    font-size: 14px;
    margin-bottom: 0;

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
  padding: ${dimensions.unitSpacing}px ${dimensions.coreSpacing}px;
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

const Content = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;

  > form {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  // max-width:70%;
  background: ${colors.updatedBgColor + 80};
`;

const Row = styled.div`
  display: flex;

  .Select {
    flex: 1;
  }

  button {
    flex-shrink: 0;
    margin-inline-start	: 10px;
    align-self: baseline;
  }
`;

const SearchInput = styled.div`
  position: relative;

  input {
    border-bottom: 1px solid ${colors.borderPrimary};
    padding: ${dimensions.unitSpacing}px ${dimensions.coreSpacing}px;
    background: ${colors.colorWhite};

    &:focus {
      outline: 0;
    }
  }
`;

const customSelectStyles = {
  control: base => ({
    ...base,
    minHeight: 34
  })
};

export {
  MessengerPreview,
  IntegrationName,
  BrandName,
  Options,
  Description,
  Script,
  RefreshPermission,
  GoogleButton,
  AccountBox,
  AccountTitle,
  AccountItem,
  FacebookButton,
  ImageWrapper,
  TextWrapper,
  Attachments,
  FlexRow,
  Row,
  Subject,
  ToolBar,
  Content,
  LeftContent,
  MailEditorWrapper,
  ControlWrapper,
  Resipients,
  Uploading,
  SpaceBetweenRow,
  EditorFooter,
  FileSize,
  ShowReplyButtonWrapper,
  ShowReplies,
  PopoverLinkWrapper,
  SearchInput,
  customSelectStyles
};
