import PropTypes from 'prop-types';
import clsx from 'classnames/bind';
import { Link } from 'react-router-dom';

import usePagination from '../../hooks/usePagination';

// Esto es para no tener los estilos tan largos en el html
const classes = clsx.bind({
  root: 'relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20',
  current: 'border-indigo-500 bg-indigo-50 text-indigo-600',
  hasDots: 'bg-gray-50',
});

function PaginationItem({ current = false, hasDots = false, href, children }) {
  return href ? (
    <Link to={href} className={classes('root', current && 'current', hasDots && 'hasDots')}>
      {children}
    </Link>
  ) : (
    <div className={classes('root', current && 'current', hasDots && 'hasDots')}>{children}</div>
  );
}

function Pagination({ page, count, baseUrl }) {
  const { pagesInLeft, pagesInRight, shouldRenderLastPage, shouldRenderFirstPage } = usePagination({ page, count });

  return (
    <nav className="isolate inline-flex rounded-md shadow-sm" aria-label="Pagination">
      {/* Renderiza la pagina 1 */}
      {shouldRenderFirstPage && (
        <>
          <PaginationItem href={`${baseUrl}?page=1`}>1</PaginationItem>
          <PaginationItem hasDots>...</PaginationItem>
        </>
      )}

      {/* Renderiza las paginas a la izquierda de page */}
      {pagesInLeft.map(p => (
        <PaginationItem href={`${baseUrl}?page=${p}`} key={p}>
          {p}
        </PaginationItem>
      ))}

      {/* Renderiza la pagina actual */}
      <PaginationItem href={`${baseUrl}?page=${page}`} current>
        {page}
      </PaginationItem>

      {/* Renderiza las paginas a la derecha de page */}
      {pagesInRight.map(p => (
        <PaginationItem href={`${baseUrl}?page=${p}`} key={p}>
          {p}
        </PaginationItem>
      ))}

      {/* Renderiza la pagina count */}
      {shouldRenderLastPage && (
        <>
          <PaginationItem hasDots>...</PaginationItem>
          <PaginationItem href={`${baseUrl}?page=${count}`}>{count}</PaginationItem>
        </>
      )}
    </nav>
  );
}

export default Pagination;

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

PaginationItem.propTypes = {
  current: PropTypes.bool,
  hasDots: PropTypes.bool,
};

PaginationItem.defaultProps = {
  current: false,
  hasDots: false,
};
