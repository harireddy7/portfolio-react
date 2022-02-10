import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_TITLES } from '../utils/constants';

const useDocumentTitle = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        const path = pathname.split('/')[1] || 'about';
		document.title = PAGE_TITLES[path];
	}, [pathname]);
    return null;
}

export default useDocumentTitle;