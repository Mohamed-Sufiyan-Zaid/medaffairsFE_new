import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './document_history.css';
import {
  documentSelector,
  updateSearchBy,
  updateSortBy,
} from '../../store/features/document/index';

interface DocumenthistoryProps {}

const Documenthistory: React.FC<DocumenthistoryProps> = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSortOrder, setSortOrder] = useState(false);
  const documents: any[] = useSelector(documentSelector.getDocuments);
  const sortOrder: any = useSelector(documentSelector.getSortBy);
  const searchBy: any = useSelector(documentSelector.getSearchBy);
  const [menuOpenState, setMenuOpenState] = useState<boolean[]>(Array(documents.length).fill(false));

  const activeDocuments = documents.filter((doc) => doc.status !== 'Inactive');
  const archivedDocuments = documents.filter((doc) => doc.status === 'Inactive');

  const statusColors: Record<string, string> = {
    active: '#0DBDBA', 
    inactive: '#4C5459',
    locked: '#925e1f'
  };  

  const sortedDocuments = [...documents].sort((a, b) =>
    a.isBookmarked === b.isBookmarked ? 0 : a.isBookmarked ? -1 : 1,
  );

  const handleSearchInputChange = (searchVal: any) => {
    const newValue = searchVal.target.value;
    setSearchQuery(newValue);
    dispatch(updateSearchBy(newValue));
  };

  const handleSortOption = (sortVal: any) => () => {
    dispatch(updateSortBy(sortVal));
  };

/*  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };*/

  const toggleMenu = (index: number) => {
    const updatedMenuOpenState = [...menuOpenState];
    updatedMenuOpenState[index] = !updatedMenuOpenState[index];
    setMenuOpenState(updatedMenuOpenState);
  };
  
  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const toggleSortOptions = () => {
    setSortOrder(!isSortOrder);
  };

  const handleCreateNewClick = () => {
    // create new
  };

  /* useEffect(() => {
    dispatch(updateSearchBy('Title2'));
  }, [])*/

  return (
    <div className='home'>
      <div className='doc_tab'>
        <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
          My Documents
        </button>
        <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
          Archived Documents
        </button>
      </div>

      <div className='navi-bar'>
        <div className='search-bar'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='23'
            height='23'
            viewBox='0 0 23 23'
            fill='none'
          >
            <path
              d='M16.438 14.4654H15.3991L15.0309 14.1103C16.3196 12.6112 17.0955 10.665 17.0955 8.54774C17.0955 3.82676 13.2687 0 8.54774 0C3.82676 0 0 3.82676 0 8.54774C0 13.2687 3.82676 17.0955 8.54774 17.0955C10.665 17.0955 12.6112 16.3196 14.1103 15.0309L14.4654 15.3991V16.438L21.0406 23L23 21.0406L16.438 14.4654ZM8.54774 14.4654C5.2733 14.4654 2.63007 11.8222 2.63007 8.54774C2.63007 5.2733 5.2733 2.63007 8.54774 2.63007C11.8222 2.63007 14.4654 5.2733 14.4654 8.54774C14.4654 11.8222 11.8222 14.4654 8.54774 14.4654Z'
              fill='#A1AAB1'
            />
          </svg>
          <input
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className='sort-toggle' onClick={toggleSortOptions}>
          <span>Sort by </span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='11'
            height='7'
            viewBox='0 0 11 7'
            fill='none'
          >
            <path
              d='M1.2925 0L5.5 4.32659L9.7075 0L11 1.33198L5.5 7L0 1.33198L1.2925 0Z'
              fill='#353B3E'
            />
          </svg>
          {isSortOrder && (
            <div className='sort-box'>
              {[
                { t: 'Date', v: 'date' },
                { t: 'Readibility Score', v: 'RScore' },
                { t: 'Perception Score', v: 'PScore' },
              ].map((item: any) => (
                <button onClick={handleSortOption(item.v)}>{item.t}</button>
              ))}
              {/* <button>Date</button>
              <button>RScore</button>
              <button>Option 3</button> */}
            </div>
          )}
        </div>

        <button className='create-button' onClick={handleCreateNewClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
          >
            <path
              d='M11 5.5H9V9.5H5V11.5H9V15.5H11V11.5H15V9.5H11V5.5ZM10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM10 18.5C5.59 18.5 2 14.91 2 10.5C2 6.09 5.59 2.5 10 2.5C14.41 2.5 18 6.09 18 10.5C18 14.91 14.41 18.5 10 18.5Z'
              fill='white'
            />
          </svg>
          Create New
        </button>
      </div>
      {activeTab === 1 && (
        <div className='tab-container'>
          {sortedDocuments &&
            activeDocuments.map((document, index) => (
              <div key={index} className='tab-component'>
                <div className='content'>
                  {document.isBookmarked && (
                    <div className='bookmark-icon'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='17'
                        height='22'
                        viewBox='0 0 17 22'
                        fill='none'
                      >
                        <path
                          d='M14.5714 0H2.42857C1.09286 0 0.0121431 1.1 0.0121431 2.44444L0 22L8.5 18.3333L17 22V2.44444C17 1.1 15.9071 0 14.5714 0Z'
                          fill='#9D73F7'
                        />
                      </svg>
                    </div>
                  )}
                  <div className='title'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='37'
                      height='37'
                      viewBox='0 0 47 47'
                      fill='none'
                    >
                      <circle cx='23.5' cy='23.5' r='23' fill='white' stroke='#007AC0' />
                      <path
                        d='M16.375 12C15.0756 12 14 13.0416 14 14.3V32.7C14 33.9584 15.0756 35 16.375 35H30.625C31.9244 35 33 33.9584 33 32.7V18.9L25.875 12H16.375ZM16.375 14.3H24.6875V20.05H30.625V32.7H16.375V14.3ZM18.75 23.5V25.8H28.25V23.5H18.75ZM18.75 28.1V30.4H28.25V28.1H18.75Z'
                        fill='#007AC0'
                      />
                    </svg>
                    {document.title}
                  </div>
                  <div className='menu-toggle' onClick={() => toggleMenu(index)}>
                  
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='26'
                      height='26'
                      viewBox='0 0 26 26'
                      fill='none'
                    >
                      <g clip-path='url(#clip0_2239_6041)'>
                        <path
                          d='M12.7636 8.51041C13.9336 8.51041 14.8909 7.55313 14.8909 6.38313C14.8909 5.21313 13.9336 4.25586 12.7636 4.25586C11.5936 4.25586 10.6364 5.21313 10.6364 6.38313C10.6364 7.55313 11.5936 8.51041 12.7636 8.51041ZM12.7636 10.6377C11.5936 10.6377 10.6364 11.595 10.6364 12.765C10.6364 13.935 11.5936 14.8922 12.7636 14.8922C13.9336 14.8922 14.8909 13.935 14.8909 12.765C14.8909 11.595 13.9336 10.6377 12.7636 10.6377ZM12.7636 17.0195C11.5936 17.0195 10.6364 17.9768 10.6364 19.1468C10.6364 20.3168 11.5936 21.274 12.7636 21.274C13.9336 21.274 14.8909 20.3168 14.8909 19.1468C14.8909 17.9768 13.9336 17.0195 12.7636 17.0195Z'
                          fill='#838383'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_2239_6041'>
                          <rect width='25.5273' height='25.5273' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    {menuOpenState[index] && (
                      <div className='menu-box'>
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='18'
                            height='20'
                            viewBox='0 0 18 20'
                            fill='none'
                          >
                            <path
                              d='M13.2632 0H1.89474C0.852632 0 0 0.818182 0 1.81818V14.5455H1.89474V1.81818H13.2632V0ZM16.1053 3.63636H5.68421C4.64211 3.63636 3.78947 4.45455 3.78947 5.45455V18.1818C3.78947 19.1818 4.64211 20 5.68421 20H16.1053C17.1474 20 18 19.1818 18 18.1818V5.45455C18 4.45455 17.1474 3.63636 16.1053 3.63636ZM16.1053 18.1818H5.68421V5.45455H16.1053V18.1818Z'
                              fill='#0095FF'
                            />
                          </svg>{' '}
                          Clone
                        </div>
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='21'
                            height='20'
                            viewBox='0 0 21 20'
                            fill='none'
                          >
                            <path
                              d='M12.9015 6.68889L13.9747 7.71111L3.40619 17.7778H2.33301V16.7556L12.9015 6.68889ZM17.101 0C16.8093 0 16.506 0.111111 16.2844 0.322222L14.1497 2.35556L18.5241 6.52222L20.6588 4.48889C21.1137 4.05556 21.1137 3.35556 20.6588 2.92222L17.9292 0.322222C17.6959 0.1 17.4043 0 17.101 0ZM12.9015 3.54444L0 15.8333V20H4.37439L17.2759 7.71111L12.9015 3.54444Z'
                              fill='#0095FF'
                            />
                          </svg>{' '}
                          Edit
                        </div>
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M10.7071 16.7071L17.0711 10.3431C17.4616 9.95262 17.4616 9.31946 17.0711 8.92893C16.6805 8.53841 16.0474 8.53841 15.6569 8.92893L11 13.5858L11 0H9L9 13.5858L4.34315 8.92893C3.95262 8.53841 3.31946 8.53841 2.92893 8.92893C2.53841 9.31946 2.53841 9.95262 2.92893 10.3431L9.29289 16.7071C9.68342 17.0976 10.3166 17.0976 10.7071 16.7071ZM0 20L20 20V18L0 18V20Z'
                              fill='#0095FF'
                            />
                          </svg>{' '}
                          Download
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className='line'></div>
                <div className='info'>
                  <span className='created-by-on'>
                    Details
                    <div className='status' style={{ backgroundColor: statusColors[document.status.toLowerCase()] }}>{document.status}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="#A1AAB1"/>
</svg>
                    <div className='owner'>{`Owner: ${document.createdBy}`}</div>
                  </span>
                </div>

                <div className='scores'>
                  <div>Readability Score</div>
                  <div className='field scorev1' style={{ color: '#9D8806' }}>
                    {document.RScore}
                  </div>
                </div>

                <div className='actions'>
                  <div>Perception Score</div>
                  <div className='field scorev2'>{document.PScore}</div>
                </div>
              </div>
            ))}
        </div>
      )}
      {activeTab === 2 && (
        <div className='tab-container'>
          {archivedDocuments.map((document, index) => (
            <div key={index} className='tab-component'>
              <div className='content'>
                {document.isBookmarked && (
                  <div className='bookmark-icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='17'
                      height='22'
                      viewBox='0 0 17 22'
                      fill='none'
                    >
                      <path
                        d='M14.5714 0H2.42857C1.09286 0 0.0121431 1.1 0.0121431 2.44444L0 22L8.5 18.3333L17 22V2.44444C17 1.1 15.9071 0 14.5714 0Z'
                        fill='#9D73F7'
                      />
                    </svg>
                  </div>
                )}
                <div className='title'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='37'
                    height='37'
                    viewBox='0 0 47 47'
                    fill='none'
                  >
                    <circle cx='23.5' cy='23.5' r='23' fill='white' stroke='#007AC0' />
                    <path
                      d='M16.375 12C15.0756 12 14 13.0416 14 14.3V32.7C14 33.9584 15.0756 35 16.375 35H30.625C31.9244 35 33 33.9584 33 32.7V18.9L25.875 12H16.375ZM16.375 14.3H24.6875V20.05H30.625V32.7H16.375V14.3ZM18.75 23.5V25.8H28.25V23.5H18.75ZM18.75 28.1V30.4H28.25V28.1H18.75Z'
                      fill='#007AC0'
                    />
                  </svg>
                  {document.title}
                </div>

                <div className='menu-toggle' onClick={() => toggleMenu(index)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='26'
                    height='26'
                    viewBox='0 0 26 26'
                    fill='none'
                  >
                    <g clip-path='url(#clip0_2239_6041)'>
                      <path
                        d='M12.7636 8.51041C13.9336 8.51041 14.8909 7.55313 14.8909 6.38313C14.8909 5.21313 13.9336 4.25586 12.7636 4.25586C11.5936 4.25586 10.6364 5.21313 10.6364 6.38313C10.6364 7.55313 11.5936 8.51041 12.7636 8.51041ZM12.7636 10.6377C11.5936 10.6377 10.6364 11.595 10.6364 12.765C10.6364 13.935 11.5936 14.8922 12.7636 14.8922C13.9336 14.8922 14.8909 13.935 14.8909 12.765C14.8909 11.595 13.9336 10.6377 12.7636 10.6377ZM12.7636 17.0195C11.5936 17.0195 10.6364 17.9768 10.6364 19.1468C10.6364 20.3168 11.5936 21.274 12.7636 21.274C13.9336 21.274 14.8909 20.3168 14.8909 19.1468C14.8909 17.9768 13.9336 17.0195 12.7636 17.0195Z'
                        fill='#838383'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_2239_6041'>
                        <rect width='25.5273' height='25.5273' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  {menuOpenState[index]  && (
                    <div className='menu-box'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='18'
                          height='20'
                          viewBox='0 0 18 20'
                          fill='none'
                        >
                          <path
                            d='M13.2632 0H1.89474C0.852632 0 0 0.818182 0 1.81818V14.5455H1.89474V1.81818H13.2632V0ZM16.1053 3.63636H5.68421C4.64211 3.63636 3.78947 4.45455 3.78947 5.45455V18.1818C3.78947 19.1818 4.64211 20 5.68421 20H16.1053C17.1474 20 18 19.1818 18 18.1818V5.45455C18 4.45455 17.1474 3.63636 16.1053 3.63636ZM16.1053 18.1818H5.68421V5.45455H16.1053V18.1818Z'
                            fill='#0095FF'
                          />
                        </svg>{' '}
                        Clone
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='21'
                          height='20'
                          viewBox='0 0 21 20'
                          fill='none'
                        >
                          <path
                            d='M12.9015 6.68889L13.9747 7.71111L3.40619 17.7778H2.33301V16.7556L12.9015 6.68889ZM17.101 0C16.8093 0 16.506 0.111111 16.2844 0.322222L14.1497 2.35556L18.5241 6.52222L20.6588 4.48889C21.1137 4.05556 21.1137 3.35556 20.6588 2.92222L17.9292 0.322222C17.6959 0.1 17.4043 0 17.101 0ZM12.9015 3.54444L0 15.8333V20H4.37439L17.2759 7.71111L12.9015 3.54444Z'
                            fill='#0095FF'
                          />
                        </svg>{' '}
                        Edit
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M10.7071 16.7071L17.0711 10.3431C17.4616 9.95262 17.4616 9.31946 17.0711 8.92893C16.6805 8.53841 16.0474 8.53841 15.6569 8.92893L11 13.5858L11 0H9L9 13.5858L4.34315 8.92893C3.95262 8.53841 3.31946 8.53841 2.92893 8.92893C2.53841 9.31946 2.53841 9.95262 2.92893 10.3431L9.29289 16.7071C9.68342 17.0976 10.3166 17.0976 10.7071 16.7071ZM0 20L20 20V18L0 18V20Z'
                            fill='#0095FF'
                          />
                        </svg>{' '}
                        Download
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className='line'></div>
              <div className='info'>
                <span className='created-by-on'>
                  Details
                  <div className='status' style={{ backgroundColor: statusColors[document.status.toLowerCase()] }}>{document.status}</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="#A1AAB1"/>
</svg>
                  <div className='owner'>{`Owner: ${document.createdBy}`}</div>
                </span>
              </div>

              <div className='scores'>
                <div>Readability Score</div>
                <div className='field scorev1' style={{ color: '#9D8806' }}>
                  {document.RScore}
                </div>
              </div>

              <div className='actions'>
                <div>Perception Score</div>
                <div className='field scorev2'>{document.PScore}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Documenthistory;
